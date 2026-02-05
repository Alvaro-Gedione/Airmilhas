// sidebar.js

// =================================================================================
// 1. CSS PARA A SIDEBAR (Cores AirMilhas: Azul Escuro, Cinza e Branco)
// =================================================================================

const sidebarCSS = `
    :root {
        --air-dark-blue: #0a192f;
        --air-medium-blue: #112240;
        --air-accent-blue: #233554;
        --air-silver: #ccd6f6;
        --air-slate: #8892b0;
        --air-white: #ffffff;
    }

    .sidebar {
        height: 100vh;
        width: 260px;
        transition: width 0.3s ease;
        display: flex;
        flex-direction: column;
        padding: 16px;
        box-sizing: border-box;
        background: linear-gradient(180deg, var(--air-dark-blue) 0%, var(--air-medium-blue) 100%);
        color: var(--air-silver);
        border-right: 1px solid var(--air-accent-blue);
    }

    .sidebar-header {
        display: flex;
        align-items: center;
        padding-bottom: 24px;
        margin-bottom: 20px;
        border-bottom: 1px solid var(--air-accent-blue);
        position: relative;
    }

    .logo-container {
        display: flex;
        align-items: center;
        gap: 12px;
        font-family: 'Inter', sans-serif;
        font-weight: 700;
        color: var(--air-white);
    }

    .logo-wrapper {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        background: var(--air-white);
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 15px rgba(204, 214, 246, 0.2);
    }

    .logo-wrapper img {
        width: 80%;
        height: 80%;
        object-fit: contain;
    }

    .sidebar-nav {
        flex-grow: 1;
        overflow-y: auto;
    }

    .sidebar-nav ul { list-style: none; padding: 0; }
    
    .sidebar-nav a {
        color: var(--air-slate);
        text-decoration: none;
        font-size: 15px;
        padding: 12px 16px;
        display: flex;
        align-items: center;
        border-radius: 8px;
        transition: 0.2s;
        margin-bottom: 4px;
    }

    .sidebar-nav a i { width: 24px; font-size: 18px; margin-right: 12px; }

    .sidebar-nav a:hover {
        background: var(--air-accent-blue);
        color: var(--air-white);
    }

    .sidebar-nav a.active {
        background: var(--air-white);
        color: var(--air-dark-blue);
        font-weight: 600;
    }

    .nav-divider {
        height: 1px;
        background: var(--air-accent-blue);
        margin: 15px 10px;
    }

    .sidebar-toggle {
        background: var(--air-accent-blue);
        border: none;
        color: var(--air-white);
        width: 24px;
        height: 24px;
        border-radius: 50%;
        cursor: pointer;
        position: absolute;
        right: -28px;
        top: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    }

    /* Perfil do Usuário Estilizado */
    .user-profile {
        margin-top: auto;
        padding: 15px;
        background: rgba(255,255,255,0.03);
        border-radius: 12px;
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .profile-avatar {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        background: var(--air-accent-blue);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--air-white);
        font-weight: bold;
    }

    .profile-text p { margin: 0; font-size: 13px; }
    .profile-text .name { color: var(--air-white); font-weight: 600; }
    .profile-text .role { color: var(--air-slate); font-size: 11px; }

    /* Estado Colapsado */
    .sidebar.sidebar-collapsed { width: 80px; }
    .sidebar.sidebar-collapsed .nav-text, 
    .sidebar.sidebar-collapsed .profile-text,
    .sidebar.sidebar-collapsed .logo-container span { display: none; }
    .sidebar.sidebar-collapsed .sidebar-header { justify-content: center; }
`;

// =================================================================================
// 2. HTML DA SIDEBAR (Com as abas da AirMilhas)
// =================================================================================
const sidebarHTML = `
    <aside class="sidebar">
        <div class="sidebar-header">
            <div class="logo-container">
                <div class="logo-wrapper">
                    <img src="./img/Airmilhas_Logo.png" alt="AirMilhas">
                </div>
                <span class="nav-text">AirMilhas</span>
            </div>
            <button id="sidebar-toggle-btn" class="sidebar-toggle">
                <i class="fa-solid fa-chevron-left"></i>
            </button>
        </div>

        <nav class="sidebar-nav">
            <ul>
                <li><a href="./index.html" class="nav-link active"><i class="fa-solid fa-chart-line"></i> <span class="nav-text">Painel Geral</span></a></li>
                <li><a href="./Mentoria.html" class="nav-link"><i class="fa-solid fa-graduation-cap"></i> <span class="nav-text">Mentoria</span></a></li>
                <li><a href="./Financeiro.html" class="nav-link"><i class="fa-solid fa-hand-holding-dollar"></i> <span class="nav-text">Financeiro</span></a></li>
                
                <li class="nav-divider"></li>

                <li><a href="./Milhas.html" class="nav-link"><i class="fa-solid fa-plane-up"></i> <span class="nav-text">Gestão de Milhas</span></a></li>
                <li><a href="./Vendas.html" class="nav-link"><i class="fa-solid fa-cart-shopping"></i> <span class="nav-text">Vendas</span></a></li>
                <li><a href="./PosVenda.html" class="nav-link"><i class="fa-solid fa-star"></i> <span class="nav-text">Pós-vendas (NPS)</span></a></li>
                
                <li class="nav-divider"></li>

                <li><a href="./Tarefas.html" class="nav-link"><i class="fa-solid fa-list-check"></i> <span class="nav-text">Tarefas</span></a></li>
                <li><a href="./Agenda.html" class="nav-link"><i class="fa-solid fa-calendar-days"></i> <span class="nav-text">Agenda</span></a></li>
            </ul>
        </nav>

        <div class="user-profile">
            <div id="user-profile-avatar" class="profile-avatar">AD</div>
            <div class="profile-text">
                <p class="name" id="user-profile-name">Admin AirMilhas</p>
                <p class="role" id="user-profile-role">Gestor de Operações</p>
            </div>
            <a href="#" id="logout-btn" style="margin-left: auto; color: var(--air-slate);"><i class="fa-solid fa-power-off"></i></a>
        </div>
    </aside>
`;

// =================================================================================
// 3. LÓGICA DE INICIALIZAÇÃO
// =================================================================================

function loadSidebar() {
    // Injeta o CSS
    const style = document.createElement('style');
    style.textContent = sidebarCSS;
    document.head.appendChild(style);

    // Injeta o HTML
    const placeholder = document.getElementById('sidebar-placeholder');
    if (placeholder) {
        placeholder.innerHTML = sidebarHTML;
    }

    // Lógica do Botão Toggle
    const sidebar = document.querySelector('.sidebar');
    const toggleBtn = document.getElementById('sidebar-toggle-btn');
    
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('sidebar-collapsed');
            const icon = toggleBtn.querySelector('i');
            if (sidebar.classList.contains('sidebar-collapsed')) {
                icon.className = 'fa-solid fa-chevron-right';
            } else {
                icon.className = 'fa-solid fa-chevron-left';
            }
        });
    }

    // Marcar link ativo baseado na URL
    const currentPath = window.location.pathname.split('/').pop();
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href').includes(currentPath)) {
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', loadSidebar);