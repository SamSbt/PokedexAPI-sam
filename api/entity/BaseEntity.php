<?php

namespace Entity;

#[\AllowDynamicProperties]

class BaseEntity
{
  function __construct($fields = [])
  {
    // $pk = "id_" . lcfirst(str_replace("Entity\\", "", get_called_class()));
    // $this->{$pk} = 0;

// Initialiser la clé primaire seulement si elle n'est pas définie dans $fields
        // if (!array_key_exists($pk, $fields)) {
        //     $this->{$pk} = null; // ou $this->{$pk} = 0; si vous préférez
        // }

    foreach ($fields as $k => $v) {
      // vérifie si la propriété existe dans la classe
      if (property_exists($this, $k)) {
        $this->{$k} = $v;
      }
    }

  }
}
