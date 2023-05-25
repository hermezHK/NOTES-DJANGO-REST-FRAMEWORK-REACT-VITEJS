# Notes-Django-React
- After taking off the backend configure the following ...
- ## STEPs
```javascript
 1.1 - run terminal client : npm run build
 ```
 ```python
 1.2 - settings.py :
 
 STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'client', 'dist')
]

run terminal python :  python manage.py collectstatic
 ```
 
 ```python
 1.3 - can read the HTML template in settings.py :
 
from django.conf.urls.static import static
from django.views.generic import TemplateView
from django.conf import settings

urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html'), name='index'),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
 
  ```
  
   ```python
  1.4 - tell you where to look for that file in DIRS in settings.py
  
  TEMPLATES = [
    {
    'DIRS': [os.path.join(BASE_DIR, 'client', 'dist')],
    }
   ```
  ```python
  1.5 - config read url in vite.config.js : 
  
  export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/static/' : '/',
})

  ```
  
  ```python
  1.6 - config databases in settings.py : 
  
  DATABASES = {
    "default":
    dj_database_url.config(default="sqlite:///" +
                           os.path.join(BASE_DIR, "db.sqlite3"))
}
  ```
  
  ```python
  1.7 - config dev and production -  client/src/clientAPI/tasks.api.js: 
  
  const URL =
  process.env.NODE_ENV === "production"
    ? import.meta.env.VITE_BACKEND_URL
    : "http://localhost:8000";

console.log(URL);
const tasksApi = axios.create({
  baseURL: `${URL}/tasks/api/v1/tasks/`,
});
  ```
  
  ```python
  1.8 - create file .env in backend
  
  VITE_BACKEND_URL=http://localhost:8000
  ```
  ```python
  1.9 - create file .env.local in frontend
  
  VITE_BACKEND_URL=https://web-production-104d.up.railway.app
  ```
  
  ```python
  1.10 create file Procfile :
  
  web: cd client && npm install && npm run build && cd .. && python manage.py migrate && python manage.py collectstatic && gunicorn django_crud_api.wsgi
  ```
  
   ```python
  1.11 - create file nixpacks.toml in railway :
  
  providers = ["node", "python"]

  [variables]
  NODE_ENV = 'production'

  ```
  ```bash
  Upload the dist file to the repository and remember to remove the .gitignore dist from backend and frontend
  ```
  
  
  
