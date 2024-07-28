<?php

namespace Controller;

use Controller\BaseController;
use Core\HttpResponse;
use Entity\Pokemon;
use Repository\PokemonRepository;

class PokemonController extends BaseController
{
  protected function getPokemonsWithTypes(): array
  {
    $repository = new PokemonRepository();
    return $repository->getPokemonsWithTypes();
  }

  protected function get(): array
  {
    if ($this->id === 0) {
      return $this->getPokemonsWithTypes();
    }
    return parent::get();
  }
}
