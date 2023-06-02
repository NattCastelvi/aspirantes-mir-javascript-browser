// Estructura de datos del menú
const menu = [
    {
        name: 'Home',
        link: '/',
        items: []
    },
    {
        name: 'About',
        link: '/about',
        items: []
    },
    {
        name: 'Products',
        link: '/products',
        items: [
            {
                name: 'Product 1',
                link: '/products/1',
                items: []
            },
            {
                name: 'Product 2',
                link: '/products/2',
                items: [
                    {
                        name: 'Product 2.1',
                        link: '/products/2/1',
                        items: []
                    },
                ]
            },
        ]
    },
    {
        name: 'Services',
        link: '/services',
        items: [
            {
                name: 'Service 1',
                link: '/services/1',
                items: [
                    {
                        name: 'Service 1.1',
                        link: '/services/1/1',
                        items: []
                    },
                ]
            },
            {
                name: 'Service 2',
                link: '/services/2',
                items: [
                    {
                        name: 'Service 2.1',
                        link: '/services/2/1',
                        items: []
                    },
                    {
                        name: 'Service 2.2',
                        link: '/services/2/2',
                        items: []
                    },
                ]
            },
        ]
    },
];

const menuContainer = document.getElementById('menu-container');

// Función para crear el menú recursivamente
function createMenu(menu, parent) {
    const ul = document.createElement('ul');
    ul.classList.add('menu-list');
    parent.appendChild(ul)

    menu.forEach((menuItem) => {
        const li = document.createElement('li');
        li.classList.add('menu-item');
        const span = document.createElement('span');
        span.textContent = menuItem.name;
        li.appendChild(span);

        if (menuItem.items.length > 0) {
            const button = document.createElement('button');
            button.classList.add('menu-toggle');
            button.innerHTML = '&#x25BC;';
            li.appendChild(button);

    
            button.addEventListener('click', () => {
                ul.classList.toggle('collapsed');
            });

            const submenu = createMenu(item.items, li);
            li.appendChild(submenu);
        }

        ul.appendChild(li);

        li.addEventListener('click', () => {
            const activeItems = document.querySelectorAll('.menu-item.active');
            activeItems.forEach(activeItem => {
                activeItem.classList.remove('active');
            });

            li.classList.add('active');
        });
    });

    parent.appendChild(ul);

    return ul;
}

createMenu(menu, menuContainer);
