# OrderHub AZ-204 - Semana 1
Frontend: React + Vite (src/ui)
Backend: NestJS (src/api)
 
## Endpoints
- GET /health
- GET /orders
- POST /orders
 
## Local
- API: npm run start:dev (http://localhost:3000)
- UI: npm run dev (http://localhost:5173)
- Variable: VITE_API_BASE_URL=http://localhost:3000
 
## Producción (Azure)
- API (App Service): https://app-orderhubapi-gloriajaq.azurewebsites.net/health
- UI (Static Web Apps): https://lively-bay-0b181a80f.7.azurestaticapps.net
- Variable Actions: VITE_API_BASE_URL=https://app-orderhubapi-gloriajaq.azurewebsites.net
