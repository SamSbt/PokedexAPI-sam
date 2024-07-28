<?php

namespace Repository;

use Entity\Pokemon;
use PDO;

class PokemonRepository extends BaseRepository
{
  public function getPokemonsWithTypes(): array
  {
    $query = "
            SELECT p.Id_pokemon, p.name, p.sound, p.height, p.weight, p.summary, p.img_src, p.is_deleted, p.created_at, p.updated_at, t.name as type_name
            FROM Pokemon p
            LEFT JOIN Types_Pokemon tp ON p.Id_pokemon = tp.Id_pokemon
            LEFT JOIN Types t ON tp.Id_types = t.Id_types
        ";

    $statement = $this->connect()->prepare($query);
    $statement->execute();
    $results = $statement->fetchAll(PDO::FETCH_ASSOC);

    $pokemons = [];
    foreach ($results as $row) {
      $pokemonId = $row['Id_pokemon'];
      if (!isset($pokemons[$pokemonId])) {
        $pokemons[$pokemonId] = [
          'Id_pokemon' => $row['Id_pokemon'],
          'name' => $row['name'],
          'sound' => $row['sound'],
          'height' => $row['height'],
          'weight' => $row['weight'],
          'summary' => $row['summary'],
          'img_src' => $row['img_src'],
          'is_deleted' => $row['is_deleted'],
          'created_at' => $row['created_at'],
          'updated_at' => $row['updated_at'],
          'types' => []
        ];
      }
      if (!empty($row['type_name'])) {
        $pokemons[$pokemonId]['types'][] = $row['type_name'];
      }
    }

    $pokemons = array_values($pokemons);
    return $pokemons;
  }
}
