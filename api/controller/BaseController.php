<?php

namespace Controller;

use Core\HttpResponse;
use Entity\BaseEntity;

class BaseController
{
  private string $method;
  protected int $id;
  public function __construct($method, $id)
  {
    $this->method = $method;
    $methodNotExists = !method_exists(get_called_class(), $this->method);
    HttpResponse::SendNotFound($methodNotExists);
    $this->id = $id;
  }
  public function execute(): string
  {
    $result = $this->{$this->method}();
    // var_dump($result);
    return json_encode($result);
  }
  private function getBaseClassName(): string
  {
    $baseClassName = str_replace("Controller", "", get_called_class());
    return str_replace("\\", "", $baseClassName);
  }
  private function getRepositoryClassName(): string
  {
    return "Repository\\" . $this->getBaseClassName() . "Repository";
  }
  protected function get(): array | BaseEntity | null
  {
    $repositoryClassName = $this->getRepositoryClassName();
    $repository = new $repositoryClassName();
    if ($this->id <= 0) {
      $entities = $repository->getAll();
      return $entities;
    }
    $entity = $repository->getOneById($this->id);
    return $entity;
  }
  protected function post(): array
  {
    $repositoryClassName = $this->getRepositoryClassName();
    $repository = new $repositoryClassName();
    $insertedEntity = $repository->insert();
    return ["result" => $insertedEntity];
  }
  protected function put(): array
  {
    $repositoryClassName = $this->getRepositoryClassName();
    $repository = new $repositoryClassName();
    $updatedEntity = $repository->update($this->id);
    return ["result" => $updatedEntity];
  }
  protected function delete(): array
  {
    $repositoryClassName = $this->getRepositoryClassName();
    $repository = new $repositoryClassName();

    $deletedResult = $repository->delete($this->id);
    return ["result" => $deletedResult];
  }
}
