<?php

namespace Repository;

use Entity\BaseEntity;
use PDO;

class PokemonRepository extends BaseRepository
{
    // méthode spécifique pour getAll()
    protected function getBaseSelectQuery(): string
    {
        return "
            SELECT p.*, GROUP_CONCAT(t.name) AS types
            FROM pokemon p
            LEFT JOIN types_pokemon tp ON p.Id_pokemon = tp.Id_pokemon
            LEFT JOIN types t ON tp.Id_types = t.Id_types
            GROUP BY p.Id_pokemon
        ";
    }

// méthode spécifique pour getOneById()
        protected function getSelectQueryForOne(): string
    {
        return "
            SELECT p.*, GROUP_CONCAT(t.name) AS types
            FROM pokemon p
            LEFT JOIN types_pokemon tp ON p.Id_pokemon = tp.Id_pokemon
            LEFT JOIN types t ON tp.Id_types = t.Id_types
            WHERE p.Id_pokemon = ?
            GROUP BY p.Id_pokemon
        ";
    }

    // Surcharge de la méthode getOneById dans PokemonRepository
    public function getOneById($id): BaseEntity | null
    {
        $sql = $this->getSelectQueryForOne();
        // var_dump($sql);
        $queryResponse = $this->preparedQuery($sql, [$id]);
        $assocArray = $queryResponse->statement->fetch(PDO::FETCH_ASSOC);
        if (!$assocArray) {
            return null;
        }
        $entityClassName = $this->getEntityClassName();
        $entity = new $entityClassName($assocArray);
        return $entity;
    }
}
