<?php

namespace Entity;

#[\AllowDynamicProperties]

class BaseEntity
{
  function __construct($fields = [])
  {
    $pk = "Id_" . lcfirst(str_replace("Entity\\", "", get_called_class()));
    // Vérifie si la propriété existe déjà avant de la créer
    // mandatory, sinon ça double mon id_types
    if (!property_exists($this, $pk)) {
      $this->{$pk} = 0;
    }

    foreach ($fields as $k => $v) {
      // vérifie si la propriété existe dans la classe
      if (property_exists($this, $k)) {
        $this->{$k} = $v;
      }
    }

  }
}
