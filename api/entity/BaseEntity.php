<?php

namespace Entity;

#[\AllowDynamicProperties]

class BaseEntity
{
  function __construct($fields = [])
  {
    $pk = "id_" . lcfirst(str_replace("Entity\\", "", get_called_class()));
    $this->{$pk} = 0;

    foreach ($fields as $k => $v) {
      // vérifie si la propriété existe dans la classe
      if (property_exists($this, $k)) {
        $this->{$k} = $v;
      }
    }

  }
}
