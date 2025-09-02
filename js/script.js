// Variables globales
let carrito = [];
let productos = [];

// Función para cargar productos desde el JSON
async function cargarProductos() {
    try {
        const response = await fetch('js/productos.json');
        const data = await response.json();
        productos = data.productos;
        console.log('Productos cargados:', productos.length);
        
        // Si ya estamos en la sección shop, mostramos los productos
        if (document.querySelector('.categoria-btn')) {
            mostrarProductos("Todos");
        }
    } catch (error) {
        console.error('Erro al cargar productos:', error);
        mostrarError('No se pudieron cargar los productos. Por favor, recarga la página.');
    }
}

// Función para mostrar error
function mostrarError(mensaje) {
    const main = document.getElementById("main-content");
    main.innerHTML = `
        <div class="alert alert-danger text-center" role="alert">
            <h4>⚠️ Error</h4>
            <p>${mensaje}</p>
            <button class="btn btn-primary mt-2" onclick="location.reload()">Reintentar</button>
        </div>
    `;
}

// Función para mostrar notificación toast
function mostrarToast(mensaje, tipo = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast-notification toast-${tipo}`;
    toast.innerHTML = `
        <div class="d-flex align-items-center">
            <span class="me-2 toast-icon">${tipo === 'success' ? '✓' : '✗'}</span>
            <span>${mensaje}</span>
        </div>
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Función para mostrar la sección Inicio
// ...existing code...
function mostrarInicio() {
    const main = document.getElementById("main-content");
    main.innerHTML = `
        <div class="bg-dark text-light rounded-4 pb-5">
            <!-- Hero Moderno -->
            <section class="hero-section position-relative overflow-hidden py-5" style="background: linear-gradient(120deg, #23272f 70%, #444a56 100%);">
                <div class="row align-items-center">
                    <div class="col-lg-6 text-center text-lg-start px-4" data-aos="fade-right">
                        <h1 class="fw-bold mb-3" style="font-size: 3.2rem; color: #fff; font-family: 'Poppins', sans-serif; letter-spacing: 2px;">
                            Bienvenidos a <span style="color: #f8fafc;">ZANMA</span>
                        </h1>
                        <p class="lead mb-4" style="color: #e3e6ea; font-size: 1.25rem;">
                            Descubre la moda minimalista y premium que te define.<br>
                            <span class="fw-semibold text-white">Estilo, calidad y actitud en cada prenda.</span>
                        </p>
                        <button class="btn btn-lg px-5 py-2 fw-bold shadow" data-section="shop"
                            style="background: var(--color-primary); color: #fff; border-radius: 30px; font-size: 1.1rem; transition: all .3s;">
                            Explorar Colección <i class="fa-solid fa-arrow-right ms-2"></i>
                        </button>
                        <div class="mt-4 d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
                            <div class="p-3 rounded-3 shadow-sm bg-white d-flex align-items-center gap-2" style="min-width: 160px;">
                                <i class="fa-solid fa-leaf fa-lg text-success"></i>
                                <span class="fw-semibold">Eco Friendly</span>
                            </div>
                            <div class="p-3 rounded-3 shadow-sm bg-white d-flex align-items-center gap-2" style="min-width: 160px;">
                                <i class="fa-solid fa-star fa-lg text-warning"></i>
                                <span class="fw-semibold">Calidad Premium</span>
                            </div>
                            <div class="p-3 rounded-3 shadow-sm bg-white d-flex align-items-center gap-2" style="min-width: 160px;">
                                <i class="fa-solid fa-truck-fast fa-lg text-primary"></i>
                                <span class="fw-semibold">Envíos Rápidos</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 text-center position-relative" data-aos="fade-left">
                        <img src="img/logo.png" alt="Moda minimalista" class="img-fluid rounded-4 shadow-lg mt-4 mt-lg-0" style="max-width: 420px;">
                        <div class="position-absolute top-0 end-0 d-none d-lg-block" style="width: 180px; height: 180px; background: rgba(255,255,255,0.04); border-radius: 50%; z-index:0;"></div>
                    </div>
                </div>
            </section>
            <!-- Valores Modernos -->
            <section class="container my-5">
                <div class="row text-center g-4">
                    <div class="col-12 col-md-4" data-aos="fade-up">
                        <div class="p-4 h-100 shadow rounded-4" style="background:#23272f; color:#f8fafc;">
                            <h4 class="mb-2" style="color: var(--color-primary);">🌟 Calidad</h4>
                            <p>Prendas premium diseñadas para durar y destacar tu personalidad.</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-4" data-aos="fade-up" data-aos-delay="100">
                        <div class="p-4 h-100 shadow rounded-4" style="background:#23272f; color:#f8fafc;">
                            <h4 class="mb-2" style="color: var(--color-primary);">🚚 Envío Gratis</h4>
                            <p>En pedidos superiores a <span class="fw-bold">$50.000</span> en todo el país.</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-4" data-aos="fade-up" data-aos-delay="200">
                        <div class="p-4 h-100 shadow rounded-4" style="background:#23272f; color:#f8fafc;">
                            <h4 class="mb-2" style="color: var(--color-primary);">💯 Garantía</h4>
                            <p>30 días de garantía y cambios sin costo en todas tus compras.</p>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Colecciones Destacadas Modernas -->
            <section class="container my-5">
                <h2 class="text-center mb-5 fw-bold" style="color: var(--color-primary); font-family: 'Poppins', sans-serif;" data-aos="fade-up">
                    Colecciones Destacadas
                </h2>
                <div class="row g-4 justify-content-center">
                    <div class="col-12 col-sm-6 col-md-3" data-aos="zoom-in">
                        <div class="card border-0 shadow-lg rounded-4 h-100" style="background:#23272f; color:#f8fafc;">
                            <img src="img/pantalones.png" class="card-img-top rounded-top" alt="Pantalones Zanma">
                            <div class="card-body text-center">
                                <h6 class="fw-bold mb-2" style="color: var(--color-primary);">Pantalones</h6>
                                <button class="btn btn-sm mt-2 px-3" data-section="shop" data-categoria="Pantalones"
                                        style="background: var(--color-primary); color: #fff; border-radius: 20px;">
                                    Ver Colección
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-3" data-aos="zoom-in" data-aos-delay="100">
                        <div class="card border-0 shadow-lg rounded-4 h-100" style="background:#23272f; color:#f8fafc;">
                            <img src="img/remeras.jpg" class="card-img-top rounded-top" alt="Remeras Zanma">
                            <div class="card-body text-center">
                                <h6 class="fw-bold mb-2" style="color: var(--color-primary);">Remeras</h6>
                                <button class="btn btn-sm mt-2 px-3" data-section="shop" data-categoria="Remeras"
                                        style="background: var(--color-primary); color: #fff; border-radius: 20px;">
                                    Ver Colección
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-3" data-aos="zoom-in" data-aos-delay="200">
                        <div class="card border-0 shadow-lg rounded-4 h-100" style="background:#23272f; color:#f8fafc;">
                            <img src="img/zapatillas.jpg" class="card-img-top rounded-top" alt="Zapatillas Zanma">
                            <div class="card-body text-center">
                                <h6 class="fw-bold mb-2" style="color: var(--color-primary);">Zapatillas</h6>
                                <button class="btn btn-sm mt-2 px-3" data-section="shop" data-categoria="Zapatillas"
                                        style="background: var(--color-primary); color: #fff; border-radius: 20px;">
                                    Ver Colección
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-3" data-aos="zoom-in" data-aos-delay="300">
                        <div class="card border-0 shadow-lg rounded-4 h-100" style="background:#23272f; color:#f8fafc;">
                            <img src="img/buzos.jpg" class="card-img-top rounded-top" alt="Buzos Zanma">
                            <div class="card-body text-center">
                                <h6 class="fw-bold mb-2" style="color: var(--color-primary);">Buzos</h6>
                                <button class="btn btn-sm mt-2 px-3" data-section="shop" data-categoria="Buzos"
                                        style="background: var(--color-primary); color: #fff; border-radius: 20px;">
                                    Ver Colección
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Banner Promocional Moderno -->
            <section class="container my-5">
                <div class="promo-banner rounded-4 shadow-lg p-4 text-center" style="background: linear-gradient(90deg, #23272f 60%, #444a56 100%); color: #fff;">
                    <h3 class="fw-bold mb-2" style="color: var(--color-primary);">¡Nueva temporada!</h3>
                    <p class="mb-3">Descubrí los nuevos colores y texturas de nuestra colección otoño/invierno.</p>
                    <button class="btn  px-4 py-2 fw-semibold" data-section="shop">
                        Ver Novedades <i class="fa-solid fa-fire ms-2"></i>
                    </button>
                </div>
            </section>
        </div>
    `;

    // Agregar eventos a los botones
    document.querySelectorAll('[data-section="shop"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const categoria = btn.dataset.categoria;
            document.querySelector('a.nav-link[data-section="shop"]').click();
            
            // Si hay una categoría específica, filtrar
            if (categoria) {
                setTimeout(() => {
                    document.querySelector(`.categoria-btn[data-categoria="${categoria}"]`).click();
                }, 100);
            }
        });
    });
    AOS.refresh();
}
// ...existing

// Función para mostrar la sección Conócenos
// ...existing code...
function mostrarConocenos() {
    const main = document.getElementById("main-content");
    main.innerHTML = `
        <div class="row align-items-center fade-in">
            <div class="col-md-6">
                <h2 class="fw-bold mb-4 mt-2" style="color: var(--color-primary);">Nuestra Historia</h2>
                <p>
                    ZANMA nació con la visión de crear moda que combine estilo, calidad y sostenibilidad.
                    Desde 2020, nos dedicamos a seleccionar las mejores prendas y tendencias para que puedas expresar tu estilo único.
                    Trabajamos directamente con diseñadores locales y fabricantes éticos para garantizar la mejor calidad.
                </p>
                <p>
                    Nuestra misión es inspirar confianza a través de la moda, creando piezas que te hagan sentir auténtico y seguro.
                </p>
            </div>
            <div class="col-md-6 mb-2 mt-2">
                <img src="img/grupodetrabajo.png" 
                     alt="Equipo de ZANMA trabajando en el diseño de moda" 
                     class="img-fluid rounded shadow">
            </div>
        </div>
        
        <div class="row mt-5 fade-in">
            <div class="col-12 text-center">
                <h3 class="mb-4 mt-4" style="color: var(--color-primary);">Nuestros Valores</h3>
            </div>
            <div class="col-md-3 text-center mb-3">
                <div class="p-4 rounded shadow-sm h-100" style="background:#23272f; color:#f8fafc;">
                    <h5>🔄 Sostenibilidad</h5>
                    <p>Materiales eco-amigables y procesos responsables con el medio ambiente</p>
                </div>
            </div>
            <div class="col-md-3 text-center mb-3">
                <div class="p-4 rounded shadow-sm h-100" style="background:#23272f; color:#f8fafc;">
                    <h5>✨ Calidad</h5>
                    <p>Productos que perduran en el tiempo gracias a materiales premium</p>
                </div>
            </div>
            <div class="col-md-3 text-center mb-3">
                <div class="p-4 rounded shadow-sm h-100" style="background:#23272f; color:#f8fafc;">
                    <h5>🤝 Comunidad</h5>
                    <p>Apoyamos a diseñadores locales y artesanos talentosos</p>
                </div>
            </div>
            <div class="col-md-3 text-center mb-3">
                <div class="p-4 rounded shadow-sm h-100" style="background:#23272f; color:#f8fafc;">
                    <h5>💡 Innovación</h5>
                    <p>Siempre a la vanguardia de las últimas tendencias y tecnologías</p>
                </div>
            </div>
        </div>
        <div class="map-container mb-5 mt-5 m-2">
            <h2 class="mt-2 mb-2">📍-Donde encontrarnos:</h2>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27296.73236833095!2d-58.028567308984385!3d-31.21819301774949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1756757088524!5m2!1ses-419!2sar"  
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
        <!-- Sección de Contacto -->
        <section class="contacto-section rounded-4 shadow-sm p-4 mt-5" data-aos="fade-up" style="background:#23272f; color:#f8fafc;">
          <h2 class="mb-3 fw-bold text-center" style="letter-spacing: 1px;">Contáctanos</h2>
          <p class="mb-4 text-center" style="color:#cfd8dc;">¿Tienes dudas, sugerencias o quieres colaborar? Completa el formulario y nos pondremos en contacto contigo.</p>
          <form class="row g-3 justify-content-center" id="form-contacto">
            <div class="col-md-6">
              <label for="nombre" class="form-label">Nombre</label>
              <input type="text" class="form-control" id="nombre" placeholder="Tu nombre" required>
            </div>
            <div class="col-md-6">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="email" placeholder="tu@email.com" required>
            </div>
            <div class="col-12">
              <label for="mensaje" class="form-label">Mensaje</label>
              <textarea class="form-control" id="mensaje" rows="4" placeholder="Escribe tu mensaje aquí..." required></textarea>
            </div>
            <div class="col-12 text-center">
              <button type="submit" class="btn fw-bold px-5" style="background-color: black; color: white;">Enviar</button>
            </div>
          </form>
          <div id="mensaje-contacto" class="mt-3 text-center fw-bold text-success" style="display:none;"></div>
        </section>
    `;
    // Mostrar mensaje al enviar el formulario
    const form = document.getElementById("form-contacto");
    const mensajeDiv = document.getElementById("mensaje-contacto");
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            mensajeDiv.textContent = "¡Gracias por contactarnos! Te responderemos pronto.";
            mensajeDiv.style.display = "block";
            form.reset();
            setTimeout(() => {
                mensajeDiv.style.display = "none";
            }, 4000);
        });
    }
}

// Función para mostrar la sección Shop con categorías y productos
function mostrarShop() {
    const main = document.getElementById("main-content");

    // Crear botones de categorías
    const categorias = ["Todos", "Pantalones", "Remeras", "Zapatillas", "Busos"];
    let botonesCategorias = categorias.map(cat => 
        `<button class="btn categoria-btn me-2 mb-3" data-categoria="${cat}">${cat}</button>`
    ).join("");

    main.innerHTML = `
        <div class="fade-in shop-section py-5">
            <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap">
                <h2 class="fw-bold shop-title">Nuestra Colección</h2>
                <span class="badge  fs-6 shop-badge">${productos.length} productos</span>
            </div>
            <div class="mb-4 categorias-container">${botonesCategorias}</div>
            <div class="row g-4" id="productos-container">
                <div class="col-12">
                    <div class="loading">
                        <div class="spinner-border me-2" role="status">
                            <span class="visually-hidden">Cargando...</span>
                        </div>
                        Cargando productos...
                    </div>
                </div>
            </div>
        </div>
    `;

    mostrarProductos("Todos");

    document.querySelectorAll(".categoria-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".categoria-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            mostrarProductos(btn.dataset.categoria);
        });
    });

    document.querySelector(".categoria-btn[data-categoria='Todos']").classList.add("active");
}

function mostrarProductos(categoria) {
    const contenedor = document.getElementById("productos-container");
    
    let filtrados = categoria === "Todos" 
        ? productos 
        : productos.filter(p => p.categoria === categoria);

    if (filtrados.length === 0) {
        contenedor.innerHTML = `
            <div class="col-12 text-center py-5">
                <h4 class="text-muted">No hay productos en esta categoría</h4>
                <p>Prueba otra categoría o vuelve pronto para nuevas colecciones</p>
            </div>
        `;
        return;
    }

    contenedor.innerHTML = filtrados.map(p => `
        <div class=" col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card product-card h-100">
                <div class="img-wrapper">
                    <img src="${p.imagen}" class="card-img-top" alt="${p.nombre}" 
                        onerror="this.src='https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9d42fc2c-385a-4f74-bbe4-7ce4e5b5a86b.png'">
                </div>
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${p.nombre}</h5>
                    <p class="card-text flex-grow-1 text-muted">${p.descripcion}</p>
                    <div class="d-flex justify-content-between align-items-center mt-auto">
                        <span class="precio">$${p.precio.toFixed(2)}</span>
                        <button class="btn btn-sm btn-primary btn-add-cart" data-id="${p.id}">
                            🛒 Agregar
                        </button>
                    </div>
                    <small class="text-muted mt-2">Categoría: ${p.categoria}</small>
                </div>
            </div>
        </div>
    `).join("");

    document.querySelectorAll(".btn-add-cart").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.dataset.id);
            agregarAlCarrito(id);
        });
    });
}


// Función para agregar producto al carrito
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    if (!producto) return;

    const itemCarrito = carrito.find(item => item.id === id);
    if (itemCarrito) {
        itemCarrito.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }
    
    actualizarCarrito();
    mostrarToast(`Agregado: ${producto.nombre}`, 'success');
}

// Función para actualizar la visualización del carrito
function actualizarCarrito() {
 const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");

    if (carrito.length === 0) {
        cartItems.innerHTML = `
            <div class="text-center py-5">
                <div class="mb-3">🛒</div>
                <h5>Tu carrito está vacío</h5>
                <p class="text-muted">Agrega algunos productos para comenzar</p>
            </div>
        `;
        cartCount.classList.add("d-none");
        cartTotal.textContent = "$0.00";
        return;
    }

    // 🛒 Mostrar productos en el carrito
    cartItems.innerHTML = carrito.map(item => `
        <div class="d-flex justify-content-between align-items-center border-bottom py-2">
            <div>
                <strong>${item.nombre}</strong><br>
                <small>Cantidad: ${item.cantidad}</small>
            </div>
            <div>
                $${(item.precio * item.cantidad).toFixed(2)}
                <button class="btn btn-sm btn-danger ms-2" onclick="eliminarDelCarrito(${item.id})">✖</button>
            </div>
        </div>
    `).join("");

    // 🔢 Actualizar contador
    const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    cartCount.textContent = totalItems;
    cartCount.classList.remove("d-none");

    // 💲 Actualizar total
    const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Función para eliminar producto del carrito
function eliminarDelCarrito(id) {
    const producto = productos.find(p => p.id === id);
    carrito = carrito.filter(item => {
        if (item.id === id) {
            mostrarToast(`Eliminado: ${producto.nombre}`, 'error');
            return false;
        }
        return true;
    });
    actualizarCarrito();
}

// Cambiar cantidad de un producto en el carrito
function cambiarCantidad(id, delta) {
    const item = carrito.find(i => i.id === id);
    if (!item) return;
    
    item.cantidad += delta;
    if (item.cantidad < 1) {
        eliminarDelCarrito(id);
    } else {
        actualizarCarrito();
    }
}

// Manejar finalización de compra
function setupCheckout() {
    document.getElementById("btn-checkout").addEventListener("click", () => {
        if (carrito.length === 0) return;
        
        const total = document.getElementById("cart-total").textContent;
        alert(`¡Gracias por tu compra! 🎉\n\nTotal: ${total}\n\nTu pedido está siendo procesado y recibirás un email de confirmación.`);
        
        // Limpiar carrito
        carrito = [];
        actualizarCarrito();
        
        // Cerrar offcanvas carrito
        const offcanvasElement = document.getElementById("offcanvasCart");
        const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
        offcanvas.hide();
        
        // Redirigir a inicio
        mostrarInicio();
        document.querySelector('a.nav-link[data-section="inicio"]').click();
    });
}

// Navegación entre secciones
function setupNavigation() {
    document.querySelectorAll('a.nav-link, a.navbar-brand').forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const section = link.dataset.section;
            if (!section) return;

            // Cambiar clase active en navbar
            document.querySelectorAll("a.nav-link").forEach(nav => nav.classList.remove("active"));
            
            if (link.classList.contains("nav-link")) {
                link.classList.add("active");
            } else {
                document.querySelector('a.nav-link[data-section="inicio"]').classList.add("active");
            }

            switch (section) {
                case "inicio":
                    mostrarInicio();
                    break;
                case "conocenos":
                    mostrarConocenos();
                    break;
                case "shop":
                    mostrarShop();
                    break;
            }
            
            window.scrollTo(0, 0);
        });
    });
}

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', function() {
    console.log('Inicializando Zanma...');
    
    // Cargar productos
    cargarProductos();
    
    // Configurar navegación
    setupNavigation();
    
    // Configurar checkout
    setupCheckout();
    
    // Mostrar inicio por defecto
    mostrarInicio();
    
    // Actualizar carrito
    actualizarCarrito();
    
    console.log('Aplicación Zanma iniciada correctamente');
});
