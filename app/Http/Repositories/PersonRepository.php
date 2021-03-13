<?php


namespace App\Http\Repositories;


use App\Models\Person;
use \Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class PersonRepository
{
    /**
     * The person model instance.
     */
    protected $person;


    /**
     * Create a new repository instance.
     *
     * @param Person $person
     * @return void
     */
    public function __construct(Person $person)
    {
        $this->person = $person;
    }

    /**
     * Display a listing of the person.
     *
     * @param $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function listPerson($request): JsonResponse
    {
        try {
            $data = $request->all();
            $persons = $this->person->where(function ($builder) use ($data) {
                    return $builder->where('nombres', 'like', '%' . $data['filter'] . '%');
                })->paginate($data['itemsPerPage']);
            return response()->json($persons);
        } catch (\Exception $exception) {
            return response()->json($exception);
        }
    }

    /**
     * Store a newly created person in storage.
     *
     * @param $request
     * @return JsonResponse
     */
    public function storePerson($request): JsonResponse
    {
        try {
            return DB::transaction(function () use ($request) {
                $data = $request->all();
                $persons = $this->person->create($data);
                return response()->json($persons);
            });
        } catch (\Exception $exception) {
            return response()->json($exception);
        }
    }

    /**
     * Display the specified person.
     *
     * @param $id
     * @return JsonResponse
     */
    public function showPerson($id): JsonResponse
    {
        try {
            $person = $this->person->find($id);
            if (empty($person)) {
                return Util::makeResponseSuccess(null, __('messages.app.not_found', ['model' => $this->person->model]));
            }
            return Util::makeResponseSuccess($person, __('messages.app.data_retrieved', ['model' => $this->person->model]));
        } catch (\Exception $exception) {
            return Util::makeResponseError($exception->getMessage(), __('messages.app.data_not_retrieved', ['model' => $this->person->model]));
        }
    }

    /**
     * Update the specified person in storage.
     *
     * @param $request
     * @param $id
     * @return JsonResponse
     */
    public function updatePerson($request, $id): JsonResponse
    {
        try {
            return DB::transaction(function () use ($request, $id) {
                $data = $request->all();
                $objActualizar = $this->person->find($id);
                $this->person = $this->person->find($id);

                if (empty($this->person)) {
                    return response()->json(array('msg' => __('messages.app.not_found', ['model' => $this->person->model]), 'data' => null));
                }
                $this->person->update($data);

                $objArray = ['actualizar' => $objActualizar, 'actualizado' => $this->person];
                return response()->json($objArray);
            });
        } catch (\Exception $exception) {
            return response()->json($exception);
        }
    }

    /**
     * Remove the specified person from storage.
     *
     * @param $request
     * @param $id
     * @return JsonResponse
     */
    public function destroyPerson($request, $id): JsonResponse
    {
        try {
            return DB::transaction(function () use ($request, $id) {
                $person = $this->person->find($id);
                if (empty($person)) {
                    return response()->json(array('msg' => __('messages.app.not_found', ['model' => $this->person->model]), 'data' => null));
                }
                $person->delete();
                return response()->json(array('msg' => "Persona Eliminada"));
            });
        } catch (\Exception $exception) {
            return response()->json($exception);
        }
    }

    /**
     * Get all person.
     *
     * @param $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getAllPersons($request): JsonResponse
    {
        try {
            $persons = $this->person->where('enabled', '=', true)->orderByDesc('created_at')->get(['id', 'fullname', 'email']);
            return Util::makeResponseSuccess($persons, __('messages.app.data_retrieved', ['model' => $this->person->model]));
        } catch (\Exception $exception) {
            return Util::makeResponseError($exception->getMessage(), __('messages.app.data_not_retrieved', ['model' => $this->person->model]));
        }
    }

    /**
     * Get all person without user.
     *
     * @param $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getPersonsWithoutUser($request): JsonResponse
    {
        try {
            $persons = $this->person::doesntHave('user')->where('enabled', '=', true)->orderByDesc('created_at')->get(['id', 'fullname', 'email']);
            return Util::makeResponseSuccess($persons, __('messages.app.data_retrieved', ['model' => $this->person->model]));
        } catch (\Exception $exception) {
            return Util::makeResponseError($exception->getMessage(), __('messages.app.data_not_retrieved', ['model' => $this->person->model]));
        }
    }


}
