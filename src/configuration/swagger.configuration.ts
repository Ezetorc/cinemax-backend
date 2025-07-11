import { SwaggerConfig } from 'src/common/types/swagger-config.type'

export const SWAGGER_CONFIG: SwaggerConfig = {
  title: 'Cinetro',
  description: 'Cinema tickets shop API',
  version: '1.0',
  securityRequirements: 'bearer',
  bearerAuth: {
    type: 'http',
    scheme: 'bearer',
    bearerFormat: 'JWT',
    in: 'header',
    name: 'Authorization',
    description: 'Enter your bearer token'
  }
}
