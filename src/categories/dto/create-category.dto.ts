import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class CreateCategoryDto {
  @ApiProperty({ description: 'Name of the category', example: 'Adventure' })
  @IsString()
  name: string
}
