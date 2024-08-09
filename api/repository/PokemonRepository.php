<?php

namespace Repository;

use PDO;

class PokemonRepository extends BaseRepository
{
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
}
