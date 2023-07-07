import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { InjectDataSource } from '@nestjs/typeorm'
import { DataSource } from 'typeorm'

@Controller('movie')
export class MovieController {
  constructor(@InjectDataSource() private bdd: DataSource) {}

  @Post()
  create(@Body() bodyJSON) {
    return this.bdd.query('INSERT INTO movie (name, trailer_url, id_director, id_public) VALUES (?, ?, ?, ?)', [
      bodyJSON.name, 
      bodyJSON.trailer_url, 
      bodyJSON.id_director, 
      bodyJSON.id_public
    ])
  }

  @Get()
  findAll() {
    return this.bdd.query('SELECT * FROM movie')
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bdd.query('SELECT * FROM movie WHERE id_movie = ?', [id])
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() bodyJSON) {
    return this.bdd.query('UPDATE movie SET name = ?, trailer_url = ?, id_director = ?, id_public = ? WHERE id_movie = ?', [
      bodyJSON.name, 
      bodyJSON.trailer_url, 
      bodyJSON.id_director, 
      bodyJSON.id_public,
      id
    ])
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bdd.query('DELETE FROM movie WHERE id_movie = ?', [id])
  }
}
