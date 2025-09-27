/**
 * Para los submenus del Drawer permite
 * mostrar / ocultar,  modificando su estilo
 * @param {HTMLElement} item
*/
function toggleDrawerSubMenu(item) {
    const submenu = item.querySelector('.drawer-submenu');
    if (submenu) {
        submenu.classList.toggle('open');
    }
}

/**
 * Para abrir el Drawer (menú para moviles)
 */
function openDrawer() {
    const submenu = document.getElementById('drawerMenu');
    submenu.style.display = "flex";
}

/**
 * Para cerrar el Drawer
 */
function closeDrawer() {
    const submenu = document.getElementById('drawerMenu');
    submenu.style.display = "none";
}