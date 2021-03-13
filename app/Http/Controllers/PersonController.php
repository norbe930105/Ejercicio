<?php

namespace App\Http\Controllers;

use App\Http\Repositories\PersonRepository;
use App\Models\Person;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PersonController extends Controller
{
    /**
     * The person repository instance.
     */
    protected $personRepository;

    /**
     * Create a new controller instance.
     *
     * @param PersonRepository $personRepository
     * @return void
     */
    public function __construct(PersonRepository $personRepository)
    {
        $this->personRepository = $personRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request):JsonResponse
    {
        return $this->personRepository->listPerson($request);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request):JsonResponse
    {
        return $this->personRepository->storePerson($request);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Person  $person
     * @return \Illuminate\Http\Response
     */
    public function show(Person $person)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Person  $person
     * @return \Illuminate\Http\Response
     */
    public function edit(Person $person)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Person  $person
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, int $id): JsonResponse
    {
        return $this->personRepository->updatePerson($request, $id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Person  $person
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, int $id): JsonResponse
    {
        return $this->personRepository->destroyPerson($request, $id);
    }
}
