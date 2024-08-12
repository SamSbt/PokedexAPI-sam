<?php

namespace Repository;

use PDO;

class TypesRepository extends BaseRepository
{
  public function getPokemonsByTypeId($typeId)
  {
    $sql = "
        SELECT p.Id_pokemon, p.name, p.img_src,
        GROUP_CONCAT(t.name ORDER BY t.name ASC SEPARATOR ', ') AS types
        FROM pokemon p
        INNER JOIN types_pokemon tp ON p.Id_pokemon = tp.Id_pokemon
        INNER JOIN types t ON tp.Id_types = t.Id_types
        WHERE p.Id_pokemon IN (
            SELECT p.Id_pokemon
            FROM pokemon p
            INNER JOIN types_pokemon tp ON p.Id_pokemon = tp.Id_pokemon
            WHERE tp.Id_types = ?
        )
        GROUP BY p.Id_pokemon
        ";
    return $this->preparedQuery($sql, [$typeId])->statement->fetchAll(PDO::FETCH_ASSOC);
  }
}
