# Cómo Trabajar con VS Code desde tu PC

## 📥 Clonar el Repositorio en tu PC

### 1. Abre una terminal o PowerShell en tu PC

### 2. Clona el repositorio:
```bash
git clone https://github.com/alexandracruz30/alexandracruz30.github.io.git
cd alexandracruz30.github.io
```

### 3. Cambia a la rama de trabajo:
```bash
git checkout copilot/create-course-activities-page
```

### 4. Abre el proyecto en VS Code:
```bash
code .
```

## 🖥️ Abrir el Proyecto en VS Code

1. Abre VS Code
2. Ve a **File → Open Folder**
3. Selecciona la carpeta `alexandracruz30.github.io`
4. ¡Ahora puedes ver toda la estructura!

## 👁️ Estructura que Verás en VS Code

```
alexandracruz30.github.io/
├── index.html          (Archivo principal con la estructura)
├── styles.css          (Estilos de la página)
├── script.js           (Funciones JavaScript)
├── GUIA_DE_USO.md      (Esta guía)
├── README.md           (Información del proyecto)
└── files/              (Carpeta con archivos)
    ├── actividades/
    ├── tareas/
    ├── laboratorios/
    ├── materiales/
    ├── proyecto-final/
    ├── parciales/      (NUEVA)
    └── conclusion/     (NUEVA)
```

## ✏️ Hacer Cambios en VS Code

### 1. Editar Names de Estudiantes

- Abre `index.html` en VS Code
- Presiona **Ctrl+F** para buscar
- Busca: `[Nombre Estudiante 2]`
- Reemplaza con el nombre real del estudiante 2
- Busca: `[Nombre Estudiante 3]`
- Reemplaza con el nombre real del estudiante 3
- Guarda con **Ctrl+S**

### 2. Editar Correos Electrónicos

- Busca: `[correo2@ejemplo.com]`
- Reemplaza con el correo del estudiante 2
- Busca: `[correo3@ejemplo.com]`
- Reemplaza con el correo del estudiante 3
- Guarda el archivo

### 3. Editar Fechas

- Busca: `[DD/MM/AAAA]`
- Reemplaza con fechas reales (ejemplo: 15/03/2024)
- Guarda el archivo

### 4. Editar Institución

- Busca: `[Nombre de la Institución]`
- Reemplaza con tu universidad
- Busca: `[Semestre actual]`
- Reemplaza con tu semestre
- Guarda el archivo

### 5. Editar Calificaciones

- Busca: `<span class="score">___/100</span>`
- Reemplaza `___` con la calificación real
- Guarda el archivo

## 📤 Agregar Archivos PDF/ZIP

### 1. Crea los archivos PDF

Por ejemplo, para el Módulo 1, necesitas:
- `modulo1-presentacion.pdf`
- `modulo1-guia.pdf`
- `modulo1-recursos.zip`

### 2. Coloca los archivos en la carpeta correcta

**Para materiales:**
- Arrastra los archivos a `files/materiales/` en VS Code

**Para laboratorios:**
- Arrastra los archivos a `files/laboratorios/` en VS Code

**Para parciales:**
- Arrastra los archivos a `files/parciales/` en VS Code

### 3. Los archivos deben tener estos NOMBRES EXACTOS:

**Módulos (en files/materiales/):**
```
modulo1-presentacion.pdf
modulo1-guia.pdf
modulo1-recursos.zip

modulo2-presentacion.pdf
modulo2-guia.pdf
modulo2-recursos.zip

modulo3-presentacion.pdf
modulo3-guia.pdf
modulo3-recursos.zip
```

**Laboratorios (en files/laboratorios/):**
```
lab1-guia.pdf
lab1-reporte.pdf
lab1.pka

lab2-guia.pdf
lab2-reporte.pdf
lab2.pka

lab3-guia.pdf
lab3-reporte.pdf
lab3.pka

lab4-guia.pdf
lab4-reporte.pdf
lab4.pka

lab5-guia.pdf
lab5-reporte.pdf
lab5.pka

lab6-guia.pdf
lab6-reporte.pdf
lab6.pka
```

**Parciales (en files/parciales/):**
```
AC-Parcial1.pdf
AC-Parcial1-respuestas.pdf
AC-Parcial2.pdf
AC-Parcial2-respuestas.pdf
AC-Parcial3.pdf
AC-Parcial3-respuestas.pdf

E2-Parcial1.pdf
E2-Parcial1-respuestas.pdf
E2-Parcial2.pdf
E2-Parcial2-respuestas.pdf
E2-Parcial3.pdf
E2-Parcial3-respuestas.pdf

E3-Parcial1.pdf
E3-Parcial1-respuestas.pdf
E3-Parcial2.pdf
E3-Parcial2-respuestas.pdf
E3-Parcial3.pdf
E3-Parcial3-respuestas.pdf
```

**Conclusión (en files/conclusion/):**
```
syllabus-curso.pdf
rubrica-evaluacion.pdf
reportes-finales.pdf
recursos-adicionales.zip
```

## 🔄 Hacer Commit y Push desde VS Code

### Opción 1: Usar Terminal en VS Code

1. Abre la terminal en VS Code: **Ctrl+Ñ** o **Terminal → New Terminal**

2. Ejecuta estos comandos:
```bash
# Ver qué cambios tienes
git status

# Agregar todos los cambios
git add .

# Hacer commit
git commit -m "Actualizar nombres de estudiantes y agregar archivos"

# Enviar a GitHub
git push origin copilot/create-course-activities-page
```

### Opción 2: Usar Control de Código Fuente de VS Code

1. En la izquierda, haz clic en el ícono de **Control de Código Fuente** (3 círculos conectados)

2. Verás los archivos modificados

3. Escribe un mensaje en el campo **"Message"** (ejemplo: "Actualizar estudiantes")

4. Haz clic en ✓ para hacer commit

5. Haz clic en **"..."** → **Push** para enviar a GitHub

## 🎨 Cambiar Colores

Abre `styles.css` y busca:
```css
:root {
    --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --color-primary: #3498db;
    --color-primary-dark: #2980b9;
    --color-dark: #2c3e50;
    --color-secondary: #34495e;
}
```

Reemplaza los códigos de color (hexadecimales) con tus colores preferidos.

## 🌐 Ver tu Página en Tiempo Real

### Opción 1: Usar extensión "Live Server"

1. En VS Code, ve a **Extensiones** (Ctrl+Shift+X)
2. Busca "Live Server"
3. Instala la extensión de **Ritwick Dey**
4. Haz clic derecho en `index.html` → **Open with Live Server**
5. Se abrirá automáticamente en `http://localhost:5500`

### Opción 2: Usar Python

1. Abre Terminal en VS Code
2. Ejecuta:
```bash
python -m http.server 8000
```
3. Abre `http://localhost:8000` en tu navegador

## 🔗 Pull Request

Cuando termines de hacer cambios:

1. Haz commit de todos tus cambios
2. Haz push a la rama: `git push origin copilot/create-course-activities-page`
3. Ve a GitHub y verás un botón para crear **Pull Request**
4. Revisa los cambios y haz merge a `main` cuando esté listo

## 📋 Checklist Rápido

- [ ] Tengo VS Code abierto con el proyecto
- [ ] Clonué el repositorio en mi PC
- [ ] Estoy en la rama `copilot/create-course-activities-page`
- [ ] Actualicé nombres de estudiantes
- [ ] Actualicé correos
- [ ] Actualicé fechas
- [ ] Agregué archivos PDF en las carpetas correctas
- [ ] Los nombres de archivos coinciden exactamente
- [ ] Hice commit de cambios
- [ ] Hice push a GitHub

## ❓ Problemas Comunes

### "Archivo no encontrado" en el navegador
- Verifica que el archivo existe en la carpeta
- Verifica que el NOMBRE sea exactamente igual en HTML

### Los cambios no aparecen en el navegador
- Presiona **F5** o **Ctrl+F5** para recargar
- Si usas Live Server, guarda el archivo (Ctrl+S) y se recarga automáticamente

### Git dice "no configured"
- Configura git por primera vez:
```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

### Conflictos de merge
- Si hay conflictos, VS Code te mostrará las diferencias
- Selecciona qué cambios mantener y haz push nuevamente

---

¡Ahora puedes trabajar con tu página web desde tu PC! 🎉
