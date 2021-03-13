<template>
    <div class="q-pa-md">
        <q-toolbar class="bg-primary">
            <transition-group
                appear
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut"
            >
                <!-- Wrapping only one DOM element, defined by QBtn -->
                <q-btn
                    round
                    @click.prevent="openModal(true,'add')"
                    key="add"
                    flat
                    color="white"
                    icon="add"
                    :disable="(selected.length===0)?false:true"
                >
                    <q-tooltip>Crear</q-tooltip>
                </q-btn>
                <q-btn
                    round
                    key="updated"
                    flat
                    color="white"
                    icon="edit"
                    @click.prevent="openModal(true,'update')"
                    :disable="(selected.length!==0)?false:true"
                >
                    <q-tooltip>Actualizar</q-tooltip>
                </q-btn>
                <q-btn
                    round
                    key="delete"
                    flat
                    color="white"
                    icon="delete"
                    @click.prevent="deletePersons()"
                    :disable="(selected.length!==0)?false:true"
                >
                    <q-tooltip>Eliminar</q-tooltip>
                </q-btn>
            </transition-group>
            <q-space></q-space>
            <q-input borderless dense debounce="1000" v-model="filter" placeholder="Buscar">
                <template v-slot:append>
                    <q-icon name="search"/>
                </template>
            </q-input>
        </q-toolbar>
        <q-table
            title="Personas"
            :data="persons"
            :columns="columns"
            row-key="id"
            selection="single"
            :selected.sync="selected"
            :visible-columns="visibleColumns"
            :filter="filter"
            :pagination.sync="pagination"
            :rows-per-page-options="[5,10,25,50]"
            @request="loadData"
            :loading="loading"
        >
        </q-table>
        <q-form ref="form">
            <q-dialog
                v-model="modalDialog"
                persistent
                transition-show="scale"
                transition-hide="scale"
            >
                <q-card style="width: 500px">
                    <q-card-section class="bg-primary">
                        <div class="text-h6 text-white">
                            {{ this.action == 'adicionar' ? 'Adicionar Persona' : 'Actualizar Persona' }}
                        </div>
                    </q-card-section>
                    <q-card-section class="q-pa-lg">
                        <div class="row">
                            <div class="col" style="padding: 0px 20px 20px 0px">
                                <q-input v-model="form_data.nombres" type="text" label="Nombre Completo" dense
                                         name="nombres"
                                         :rules="[rules.required]"
                                />
                            </div>
                            <div class="col" style="padding: 0px 20px 20px 0px">
                                <q-input v-model="form_data.apellidos" type="text" label="Apellidos" dense name="apellidos"
                                         :rules="[rules.required]"/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col" style="padding: 0px 20px 20px 0px">
                                <q-input v-model="form_data.edad" type="text" label="Edad" dense name="edad"
                                         :rules="[rules.required]"/>
                            </div>
                            <div class="col" style="padding: 0px 20px 20px 0px">
                                <q-input v-model="form_data.sexo" label="Sexo" dense name="sexo"
                                         :rules="[rules.required]"/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col" style="padding: 0px 20px 20px 0px">
                                <q-btn icon="event" round color="primary">
                                    <q-popup-proxy transition-show="scale" transition-hide="scale">
                                        <q-date minimal v-model="form_data.fecha" :rules="[rules.required]">
                                            <q-btn label="Cancel" color="primary" flat v-close-popup />
                                            <q-btn label="OK" color="primary" flat v-close-popup />
                                        </q-date>
                                    </q-popup-proxy>
                                </q-btn>
                            </div>
                            <div class="col" style="padding: 0px 20px 20px 0px">
                                <q-input v-model="form_data.noident" type="text" label="No. Identidad" dense name="noident"
                                :rules="[rules.required, rules.cant]"/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col" style="padding: 0px 20px 20px 0px">
                                <q-input v-model="form_data.canthijos" type="tex" label="Cantidad de Hijos" dense name="canthijos"
                                         :rules="[rules.required]"/>
                            </div>
                            <div class="col" style="padding: 0px 20px 20px 0px">
                                <q-input v-model="form_data.raza" type="text" label="Raza" dense name="raza"
                                         :rules="[rules.required]"/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col" style="padding: 0px 20px 20px 0px">
                                <q-input v-model="form_data.salario" type="tex" label="Salario" dense name="salario"
                                         :rules="[rules.required]"/>
                            </div>
                            <div class="col" style="padding: 0px 20px 20px 0px">
                                <q-input v-model="form_data.cargo" type="text" label="Cargo" dense name="cargo"
                                         :rules="[rules.required]"/>
                            </div>
                        </div>
                    </q-card-section>
                    <q-separator inset/>
                    <q-card-actions align="right">
                        <q-btn type="text" :icon="action === 'add' ? 'save' : 'edit'"
                               @click="action != 'add' ? update() : save()" label="Guardar"
                               color="secondary" flat/>
                        <q-btn type="button" icon="close" @click="closeModal()" label="Cancelar" v-close-popup
                               color="secondary" flat/>
                    </q-card-actions>
                </q-card>
            </q-dialog>
        </q-form>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import {showDialog} from '../../config/dialogo';
import {infoMessage, warningMessage} from '../../config/notificaciones';
import * as message from '../../config/resources';
import * as moment from 'moment';
export default {
    name: "PersonasComponent",
    data: () => ({
        persons: [],
        valid: false,
        modalDialog: false,
        visibleColumns: ['nombres', 'apellidos', 'edad', 'sexo', 'fecha', 'noident', 'canthijos', 'raza', 'salario', 'cargo'],
        selected: [],
        add: true,
        date: moment().format(),
        filter: '',
        action: '',
        loading: false,
        pagination: {
            page: 1,
            rowsNumber: 0
        },
        form_data: {
            nombres: '',
            apellidos: '',
            edad: '',
            fecha: '',
            noident: '',
            canthijos: '',
            raza: '',
            salario: '',
            cargo: '',
            sexo: '',
        },
        form_error: false,
        required_error: false,
        columns: [
            {
                name: 'id',
                label: 'Id',
                align: 'center',
                field: row => row.id,
                sorteable: true
            },
            {
                name: 'nombres',
                label: 'Nombre Completo',
                align: 'center',
                field: 'nombres',
                search: true
            },
            {
                name: 'apellidos',
                align: 'center',
                label: 'Apellidos',
                field: 'apellidos',
            },
            {
                name: 'edad',
                align: 'center',
                label: 'Edad',
                field: 'edad',
            },
            {
                name: 'sexo',
                label: 'Sexo',
                align: 'center',
                field: 'sexo',
            },
            {
                name: 'fecha',
                align: 'center',
                label: 'Fecha de nacimiento',
                field: 'fecha'
            },
            {
                name: 'noident',
                align: 'center',
                label: 'No. Identidad',
                field: 'noident'
            },
            {
                name: 'canthijos',
                align: 'center',
                label: 'Cantidad de Hijos',
                field: 'canthijos'
            },
            {
                name: 'raza',
                align: 'center',
                label: 'Raza',
                field: 'raza'
            },
            {
                name: 'salario',
                align: 'center',
                label: 'Salario',
                field: 'salario'
            },
            {
                name: 'cargo',
                align: 'center',
                label: 'Cargo',
                field: 'cargo'
            },
        ],
        rules: {
            required: value => !!value || 'Requerido.',
            cant: value => !value || value.length === 11 || 'Debe tener 11 caracteres',
        }
    }),
    computed: {
        ...mapGetters(['currentPage']),
    },
    methods: {
        ...mapActions(['changePage']),
        closeModal() {
            this.modalDialog = false
            //this.reset_form()
            this.selected = []
        },
        openModal(data, action) {
            this.action = action
            if (action === 'add') {
                this.modalDialog = data
            } else {
                if (action === 'update') {
                    if (this.selected.length > 0) {
                        this.setFormData(this.selected)
                        this.modalDialog = data
                    } else {
                        infoMessage('Debe seleccionar la fila a modificar.')
                    }
                }
            }
        },
        setFormData(data) {
            this.form_data = Object.assign(this.form_data, data[0])
        },
        reset_form() {
            this.form_data.nombres = ''
            this.form_data.apellidos = ''
            this.form_data.sexo = ''
            this.form_data.edad = ''
            this.form_data.canthijos = ''
            this.form_data.fecha = ''
            this.form_data.salario = ''
            this.form_data.cargo = ''
            this.form_data.raza = ''
            this.form_data.noident = ''
            this.add = true
        },
        async loadData(props) {
            const {page, rowsPerPage, sortBy, descending} = props.pagination
            const filter = props.filter
            this.loading = true;
            const data = {
                itemsPerPage: rowsPerPage,
                page: page,
                filter: filter
            }
            await this.prueba(data).then(response => {
                this.pagination.rowsNumber = response.total
                this.pagination.page = page
                this.pagination.rowsPerPage = rowsPerPage
                this.pagination.sortBy = sortBy
                this.pagination.descending = descending
            })
        },
        prueba(data) {
            axios.post('api/persons', data).then((response) => {
                this.loading = false
                this.persons = response.data.data;
            });
        },
        async save() {
            axios.post('api/addpersons', this.form_data).then((response) => {
                debugger;
                this.reset_form();
                this.closeModal();
                this.loadData({pagination: this.pagination, filter: this.filter})
            }).catch(err => {
                debugger;
                console.log(err);
            })
        },
        async update() {
            axios.put('api/persons/'+this.selected[0].id, this.form_data).then((response) => {
                this.reset_form();
                this.closeModal()
                this.loadData({pagination: this.pagination, filter: this.filter})
            }).catch(err => {
            debugger;
            console.log(err);
        });
        },
        deletePersons() {
            showDialog(message.lAskForRemove).onOk(async () => {
                axios.delete('api/persons/'+this.selected[0].id).then((response) => {
                    this.closeModal()
                    this.loadData({pagination: this.pagination, filter: this.filter})
                })
            })
        },
    },
    watch: {
        pagination: {
            handler() {
                this.loadData({
                    pagination: this.pagination,
                    filter: this.filter
                })
            }
        },
    },
    created() {
        this.changePage('Personas');
    }
}
</script>

<style scoped>

</style>
