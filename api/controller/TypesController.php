<?php

namespace Controller;

use Controller\BaseController;
use Repository\TypesRepository;

class TypesController extends BaseController
{

  protected function get(): array
  {
    $repository = new TypesRepository();

    if ($this->id > 0) {
      return $repository->getPokemonsByTypeId($this->id);
    }

    return $repository->getAll();
  }
}
