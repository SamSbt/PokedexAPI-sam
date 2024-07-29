<?php

namespace Controller;

use Controller\BaseController;
use Repository\PokemonRepository;

class PokemonController extends BaseController
{
  protected function getPokemonsWithTypes(): array
  {
    $repository = new PokemonRepository();
    return $repository->getPokemonsWithTypes();
  }
}
