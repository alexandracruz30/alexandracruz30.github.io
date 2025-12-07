# Guía de Uso - Portafolio de Redes Informáticas (Reestructurado)

## ¡Bienvenido!

Tu página web ha sido completamente reestructurada con una nueva organización que incluye:
- **3 estudiantes** en la sección de perfil
- **3 módulos** del curso con materiales
- **6 laboratorios** prácticos
- **Evaluaciones parciales** de los estudiantes
- **Conclusión** del curso

## 🚀 Servidor Web Local

Para ver tu sitio mientras trabajas:

```bash
cd /workspaces/alexandracruz30.github.io
python3 -m http.server 8000
```

Luego abre: `http://localhost:8000`

## 📝 Personalización Rápida

### 1. Actualizar Nombres de Estudiantes

Abre `index.html` y busca los placeholders:

```html
<!-- Estudiante 2 -->
<h3>[Nombre Estudiante 2]</h3>
<p><strong>Correo:</strong> [correo2@ejemplo.com]</p>

<!-- Estudiante 3 -->
<h3>[Nombre Estudiante 3]</h3>
<p><strong>Correo:</strong> [correo3@ejemplo.com]</p>
```

Reemplaza con:
- **Estudiante 2**: Nombre real y correo
- **Estudiante 3**: Nombre real y correo

### 2. Reemplazar Fechas y Datos Institucionales

Busca y reemplaza en `index.html`:
- `[DD/MM/AAAA]` → Fechas reales (ej: 15/03/2024)
- `[Nombre de la Institución]` → Tu universidad
- `[Semestre actual]` → Tu semestre
- `[Institución Educativa]` → Tu institución

### 3. Actualizar Calificaciones de Parciales

Busca en `index.html`:
```html
<p class="exam-score">Calificación: <span class="score">___/100</span></p>
```

Reemplaza `___` con la calificación real.

## 📁 Estructura de Carpetas para Archivos

```
files/
├── actividades/          → PDFs de actividades de clase
├── tareas/              → PDFs/ZIPs de tareas
├── laboratorios/        → Guías (PDF), Reportes (PDF) y Archivos PKA
├── materiales/          → PDFs de módulos, presentaciones, guías
├── proyecto-final/      → Documentos del proyecto final
├── parciales/           → Exámenes (PDF) y respuestas (PDF) de parciales
└── conclusion/          → Syllabus, rúbrica, reportes finales
```

## 📤 Agregar Archivos

### Para Laboratorios (Ejemplo: Laboratorio 1)

Sube estos archivos a `files/laboratorios/`:
```
lab1-guia.pdf      → Guía del laboratorio
lab1-reporte.pdf   → Reporte del laboratorio
lab1.pka           → Archivo Cisco Packet Tracer
```

**Nota:** Los nombres DEBEN coincidir exactamente con los del HTML.

### Para Módulos (Ejemplo: Módulo 1)

Sube a `files/materiales/`:
```
modulo1-presentacion.pdf   → Presentación
modulo1-guia.pdf          → Guía de estudio
modulo1-recursos.zip      → Recursos adicionales (ZIP)
```

### Para Parciales (Ejemplo: Estudiante 1, Parcial 1)

Sube a `files/parciales/`:
```
AC-Parcial1.pdf           → Examen del parcial
AC-Parcial1-respuestas.pdf → Respuestas/Solución
```

Patrón de nombres:
- **Alexandra Cruz**: `AC-Parcial[1/2/3]`
- **Estudiante 2**: `E2-Parcial[1/2/3]`
- **Estudiante 3**: `E3-Parcial[1/2/3]`

## 🎨 Cambiar Colores

Abre `styles.css` y modifica las variables CSS (línea 2-7):

```css
:root {
    --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --color-primary: #3498db;
    --color-primary-dark: #2980b9;
    --color-dark: #2c3e50;
    --color-secondary: #34495e;
}
```

Cambia los valores hexadecimales a tus colores preferidos.

## ✅ Checklist de Personalización Completa

- [ ] Actualizar nombres de estudiantes 2 y 3
- [ ] Actualizar correos de los 3 estudiantes
- [ ] Reemplazar todas las fechas `[DD/MM/AAAA]`
- [ ] Actualizar nombre de institución
- [ ] Actualizar semestre actual
- [ ] Actualizar calificaciones de parciales
- [ ] Subir PDFs de módulos a `files/materiales/`
- [ ] Subir guías de laboratorios a `files/laboratorios/`
- [ ] Subir reportes de laboratorios a `files/laboratorios/`
- [ ] Subir archivos PKA a `files/laboratorios/`
- [ ] Subir exámenes parciales a `files/parciales/`
- [ ] Subir respuestas a `files/parciales/`
- [ ] Subir documentos finales a `files/conclusion/`
- [ ] Probar todos los enlaces de descarga
- [ ] Probar en móvil (responsividad)
- [ ] Hacer commit de cambios
- [ ] Hacer merge a rama main (cuando esté listo)

## 📋 Secciones de la Página

La página está dividida en **7 secciones principales**:

1. **Inicio** - Portada con descripción del curso
2. **Descripción del Curso** - Objetivos, temas y metodología
3. **Perfil de Estudiantes** - Información de 3 estudiantes
4. **Módulos del Curso** - 3 módulos con materiales
5. **Laboratorios Prácticos** - 6 laboratorios prácticos
6. **Evaluaciones Parciales** - 3 parciales por estudiante
7. **Conclusión del Curso** - Resumen y logros

## 🔗 Enlaces en el Navegador

```
Inicio → #inicio
Descripción del Curso → #descripcion
Estudiantes → #estudiantes
Módulos → #modulos
Laboratorios → #laboratorios
Parciales → #parciales
Conclusión → #conclusion
```

## 📚 Formatos de Archivo Soportados

✓ **PDF** - Documentos, reportes, presentaciones
✓ **ZIP** - Archivos comprimidos
✓ **PKA** - Archivos de Cisco Packet Tracer
✓ **DOCX** - Documentos Word
✓ **PPTX** - Presentaciones PowerPoint

## 🔧 Comandos Git Útiles

```bash
# Ver cambios en la rama actual
git status

# Ver cambios realizados
git diff

# Agregar cambios
git add .

# Hacer commit
git commit -m "Describe tus cambios"

# Enviar cambios a GitHub
git push origin copilot/create-course-activities-page

# Ver historial
git log --oneline
```

## 💾 Estructura HTML para Agregar Más Elementos

### Para agregar un estudiante más:

```html
<div class="student-card">
    <div class="student-header">
        <div class="student-avatar">
            <span class="avatar-placeholder">XX</span>
        </div>
        <div class="student-info">
            <h3>[Nombre Completo]</h3>
            <p class="student-subtitle">Estudiante de Redes Informáticas</p>
        </div>
    </div>
    <div class="student-details">
        <p><strong>Carrera:</strong> Ingeniería en Sistemas</p>
        <p><strong>Correo:</strong> [correo@ejemplo.com]</p>
        <h4>Competencias:</h4>
        <ul>
            <li>Competencia 1</li>
            <li>Competencia 2</li>
        </ul>
    </div>
</div>
```

### Para agregar un laboratorio más:

```html
<div class="lab-card">
    <h3>Laboratorio 7: [Título del Laboratorio]</h3>
    <p class="lab-date">Fecha: [DD/MM/AAAA]</p>
    <p class="lab-description">
        Descripción del laboratorio...
    </p>
    <div class="lab-files">
        <a href="files/laboratorios/lab7-guia.pdf" class="file-link" download>
            📄 Guía
        </a>
        <a href="files/laboratorios/lab7-reporte.pdf" class="file-link" download>
            📋 Reporte
        </a>
        <a href="files/laboratorios/lab7.pka" class="file-link" download>
            🔧 Archivo PKA
        </a>
    </div>
</div>
```

## ⚠️ Solución de Problemas

### Los archivos no se descargan
- Verifica que el archivo exista en la carpeta correcta
- Verifica que el nombre sea **exactamente igual** al del HTML
- Revisa la consola del navegador (F12) para errores

### La página se ve distinto en móvil
- Es normal, el diseño es responsivo
- Prueba con F12 → Toggle device toolbar

### Los cambios no se ven
- Limpia el caché (Ctrl+Shift+R)
- Recarga el servidor
- Verifica que hayas guardado el archivo

## 📞 Necesitas Ayuda

1. **Ver código HTML**: Abre `index.html` en VS Code
2. **Ver estilos CSS**: Abre `styles.css`
3. **Ver funciones JavaScript**: Abre `script.js`
4. **Ver comandos git**: Revisa la sección "Comandos Git Útiles"

## 🎓 ¡Felicidades!

Tu portafolio está listo para ser personalizado y compartido. ¡Sigue los pasos anteriores y tendrás un sitio web profesional!

---

**Última actualización:** 07/12/2025
**Rama:** copilot/create-course-activities-page
**Estado:** Listo para personalización
