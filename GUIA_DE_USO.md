# Guía de Uso - Portafolio de Redes Informáticas

## ¡Bienvenido!

Has creado exitosamente una página web completa para tu portafolio de Redes Informáticas. Esta guía te ayudará a personalizar y usar tu nuevo sitio web.

## 🚀 Inicio Rápido

### 1. Ver tu sitio web
Una vez que se fusione el Pull Request a la rama principal (main), tu sitio estará disponible en:
- `https://alexandracruz30.github.io/`

### 2. Personalizar el contenido
Abre el archivo `index.html` y busca los siguientes textos para reemplazar:

#### Perfil del Estudiante
- `[Nombre de la Institución]` → Nombre de tu universidad
- `[Semestre actual]` → Tu semestre actual
- `[correo@ejemplo.com]` → Tu correo electrónico

#### Fechas
- `[DD/MM/AAAA]` → Reemplaza con fechas reales (ej: 15/03/2024)

### 3. Agregar archivos

#### Estructura de carpetas:
```
files/
├── actividades/     → PDFs de actividades de clase
├── tareas/          → PDFs, ZIPs de tareas
├── laboratorios/    → PDFs, PKAs de laboratorios
├── materiales/      → Presentaciones, guías, etc.
└── proyecto-final/  → Documentos del proyecto final
```

#### Pasos para agregar un archivo:
1. Sube tu archivo a la carpeta correspondiente
2. Asegúrate que el nombre coincida con el enlace en `index.html`
3. Ejemplo: Si el HTML dice `files/tareas/tarea1.pdf`, tu archivo debe llamarse exactamente `tarea1.pdf`

### 4. Formatos de archivo soportados
- **PDF**: Documentos, reportes, presentaciones
- **ZIP**: Archivos comprimidos
- **PKA**: Archivos de Cisco Packet Tracer
- **Otros**: DOCX, PPTX, etc.

## 🎨 Personalización Avanzada

### Cambiar colores
Abre `styles.css` y modifica las variables en la parte superior:

```css
:root {
    --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --color-primary: #3498db;
    --color-primary-dark: #2980b9;
    --color-dark: #2c3e50;
    --color-secondary: #34495e;
}
```

### Agregar más actividades/tareas
Copia y pega un bloque existente en `index.html` y modifica el contenido:

```html
<div class="activity-card">
    <h3>Actividad 4: [Tu título]</h3>
    <p class="activity-date">Fecha: [DD/MM/AAAA]</p>
    <p>[Tu descripción]</p>
    <div class="activity-files">
        <a href="files/actividades/actividad4.pdf" class="file-link" download>
            📄 Descargar PDF
        </a>
    </div>
</div>
```

## 📱 Características

### Navegación
- Click en cualquier enlace del menú para ir a esa sección
- El menú se mantiene fijo en la parte superior
- Desplazamiento suave entre secciones

### Responsive
- Se adapta automáticamente a móviles, tablets y escritorio
- Pruébalo cambiando el tamaño de la ventana

### Animaciones
- Los elementos aparecen con animación al hacer scroll
- Efectos hover en botones y enlaces

## 🔧 Solución de Problemas

### Los archivos no se descargan
- Verifica que el archivo exista en la carpeta correcta
- Verifica que el nombre del archivo coincida exactamente con el enlace

### Los cambios no aparecen
- Espera unos minutos después de hacer commit
- Limpia el caché del navegador (Ctrl+F5)

### El sitio no se ve bien en móvil
- El diseño es responsive por defecto
- Asegúrate de probar en un navegador moderno

## 📚 Recursos Adicionales

### Documentación incluida
- `files/README.md` → Guía detallada para gestionar archivos
- Comentarios en el código fuente para referencia

### Mantenimiento
- Actualiza el contenido regularmente
- Agrega nuevas actividades conforme avances en el curso
- Mantén los enlaces actualizados

## ✅ Checklist de Personalización

- [ ] Actualizar información personal en el perfil
- [ ] Reemplazar todas las fechas `[DD/MM/AAAA]`
- [ ] Subir archivos a las carpetas correspondientes
- [ ] Verificar que todos los enlaces funcionen
- [ ] Probar el sitio en diferentes dispositivos
- [ ] Actualizar el estado del proyecto final cuando corresponda

## 💡 Consejos

1. **Mantén copias de seguridad** de tus archivos importantes
2. **Usa nombres descriptivos** para los archivos (sin espacios)
3. **Actualiza regularmente** el contenido del portafolio
4. **Prueba los enlaces** antes de compartir el sitio
5. **Mantén el diseño consistente** al agregar nuevo contenido

## 🎓 ¡Éxito!

Tu portafolio está listo para ser usado. ¡Compártelo con tus profesores y compañeros!

---

**¿Necesitas ayuda?** Consulta el código HTML, CSS y JavaScript para ver ejemplos y patrones que puedes seguir.
