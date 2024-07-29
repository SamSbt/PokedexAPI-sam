<?php

namespace Repository;

use PDO;

class TypesRepository extends BaseRepository
{
  // public function getTypes(): array
  // {
  //   $query = "SELECT name FROM types";
  //   $statement = $this->connect()->prepare($query);
  //   $statement->execute();
  //   $results = $statement->fetchAll(PDO::FETCH_ASSOC);

  //   $types = [];
  //   foreach ($results as $row) {
  //     $types[] = $row['name'];
  //   }
  //   return $types;
  //}
}
