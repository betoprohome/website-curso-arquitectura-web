/**
 * Para los submenus del Drawer permite
 * mostrar/ocultar modificando su estilo
 * @param {HTMLElement} item
*/
function toggleDrawerSubMenu(item) {
    const submenu = item.querySelector('.drawer-submenu');
    if (submenu) {
        submenu.classList.toggle('open');
    }
}