<?php

namespace Entity;

class Pokemon extends BaseEntity
{
  public ?int $Id_pokemon;
  public ?string $name;
  public ?string $sound;
  public ?float $height;
  public ?float $weight;
  public ?string $summary;
  public ?string $img_src;
  public ?bool $is_deleted;
  public ?string $created_at;
  public ?string $updated_at;
}
