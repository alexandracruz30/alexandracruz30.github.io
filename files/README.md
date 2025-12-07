# Directorio de Archivos

Este directorio contiene todos los archivos descargables del portafolio de Redes Informáticas.

## Estructura de Carpetas

### `/actividades`
Contiene los archivos de las actividades realizadas en clase.
- Formatos soportados: PDF, DOCX, etc.
- Nomenclatura sugerida: `actividad1.pdf`, `actividad2.pdf`, etc.

### `/tareas`
Contiene los archivos de las tareas asignadas.
- Formatos soportados: PDF, ZIP, PKA, etc.
- Nomenclatura sugerida: `tarea1.pdf`, `tarea1.zip`, `tarea2.pka`, etc.

### `/laboratorios`
Contiene los archivos de los laboratorios prácticos.
- Formatos soportados: PDF, PKA, ZIP, etc.
- Nomenclatura sugerida: `lab1.pdf`, `lab1.pka`, `lab2.zip`, etc.

### `/materiales`
Contiene el material de estudio del curso.
- Formatos soportados: PDF, PPT, PPTX, ZIP, PKA, etc.
- Tipos de archivos:
  - Presentaciones
  - Guías y manuales
  - Archivos de práctica (.pka de Cisco Packet Tracer)
  - Recursos adicionales

### `/proyecto-final`
Contiene todos los archivos relacionados con el proyecto final.
- Formatos soportados: PDF, PKA, ZIP, etc.
- Archivos típicos:
  - Documento del proyecto
  - Implementación en Packet Tracer (.pka)
  - Presentación
  - Archivo ZIP con todos los documentos

## Cómo Agregar Archivos

1. **Sube los archivos a la carpeta correspondiente**
   - Navega a la carpeta apropiada según el tipo de contenido
   - Sube el archivo con el nombre correcto

2. **Verifica que el nombre coincida con el enlace en index.html**
   - Los enlaces en el archivo HTML deben coincidir con los nombres de archivo
   - Ejemplo: Si el HTML referencia `files/tareas/tarea1.pdf`, el archivo debe llamarse exactamente `tarea1.pdf`

3. **Formatos de archivo soportados:**
   - **PDF**: Documentos, presentaciones, reportes
   - **ZIP**: Archivos comprimidos con múltiples documentos
   - **PKA**: Archivos de Cisco Packet Tracer
   - **DOCX/DOC**: Documentos de Word
   - **PPTX/PPT**: Presentaciones de PowerPoint
   - Otros formatos según necesidad

## Notas Importantes

- Mantén los nombres de archivo simples y sin espacios (usa guiones o guiones bajos)
- Asegúrate de que los archivos no sean demasiado grandes para GitHub (máximo 100MB por archivo)
- Si necesitas subir archivos grandes, considera usar Git LFS o enlaces externos
- Actualiza el archivo `index.html` si cambias los nombres de los archivos

## Ejemplo de Uso

Si quieres agregar un nuevo laboratorio:

1. Crea el archivo `lab4.pdf` con el contenido del laboratorio
2. Sube el archivo a `/laboratorios/lab4.pdf`
3. Actualiza el `index.html` para incluir un enlace al nuevo laboratorio:
   ```html
   <div class="assignment-item">
       <h4>Laboratorio 4: [Título]</h4>
       <p class="assignment-info">Fecha: [DD/MM/AAAA]</p>
       <p>[Descripción]</p>
       <div class="assignment-files">
           <a href="files/laboratorios/lab4.pdf" class="file-link" download>
               📄 Guía de Laboratorio
           </a>
       </div>
   </div>
   ```

¡Eso es todo! Los archivos estarán disponibles para descarga en el sitio web.
