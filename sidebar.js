// sidebar.js

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
        transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        flex-direction: column;
        padding: 16px;
        box-sizing: border-box;
        background: linear-gradient(180deg, var(--air-dark-blue) 0%, var(--air-medium-blue) 100%);
        color: var(--air-silver);
        border-right: 1px solid var(--air-accent-blue);
        position: relative;
        overflow: hidden; /* Garante que o conteúdo não vaze antes do scroll interno */
    }

    /* CUSTOMIZAÇÃO DO SCROLL EXTREMO */
    .sidebar-nav {
        flex-grow: 1;
        overflow-y: auto;
        overflow-x: hidden;
        margin-right: -16px; /* Empurra o scroll para a borda extrema */
        padding-right: 8px;
    }

    .sidebar-nav::-webkit-scrollbar {
        width: 4px;
    }

    .sidebar-nav::-webkit-scrollbar-track {
        background: transparent;
    }

    .sidebar-nav::-webkit-scrollbar-thumb {
        background-color: var(--air-accent-blue);
        border-radius: 10px;
    }

    .sidebar-header {
        display: flex;
        align-items: center;
        height: 60px; /* Altura fixa para evitar deslocamento */
        padding-bottom: 10px;
        margin-bottom: 20px;
        border-bottom: 1px solid var(--air-accent-blue);
        flex-shrink: 0;
    }

    .logo-container {
        display: flex;
        align-items: center;
        gap: 12px;
        font-family: 'Inter', sans-serif;
        font-weight: 700;
        color: var(--air-white);
        width: 100%;
    }

    .logo-wrapper {
        width: 46px;
        height: 46px;
        border-radius: 50%;
        background: var(--air-white);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        transition: transform 0.3s ease;
    }

    .logo-inner {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: var(--air-dark-blue);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .logo-inner img {
        width: 70%;
        height: 70%;
        object-fit: contain;
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
        white-space: nowrap;
    }

    .sidebar-nav a i { width: 24px; font-size: 18px; margin-right: 12px; flex-shrink: 0; }

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
        flex-shrink: 0;
    }

    .sidebar-toggle {
        background: var(--air-accent-blue);
        border: none;
        color: var(--air-white);
        width: 32px;
        height: 32px;
        border-radius: 50%;
        cursor: pointer;
        position: absolute;
        right: -16px; /* Posicionado meio fora para efeito hover */
        top: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        z-index: 100;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        border: 2px solid var(--air-dark-blue);
    }

    .sidebar-toggle:hover {
        background: var(--air-white);
        color: var(--air-dark-blue);
        transform: scale(1.1);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
        right: -18px; /* Move um pouco para fora no hover */
    }

    .sidebar-toggle:active {
        transform: scale(0.95);
    }

    /* Animação suave do ícone do botão */
    .sidebar-toggle i {
        transition: transform 0.3s ease;
    }

    /* Efeito quando o botão gira */
    .sidebar.sidebar-collapsed .sidebar-toggle i {
        transform: rotate(180deg);
    }

    /* Centralização absoluta dos ícones quando colapsado */
    .sidebar.sidebar-collapsed {
        width: 85px;
        align-items: center; /* Centraliza tudo */
    }

    /* Centralização perfeita dos itens do menu */
    .sidebar.sidebar-collapsed .sidebar-nav ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .sidebar.sidebar-collapsed .sidebar-nav li {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .sidebar.sidebar-collapsed .nav-divider {
        width: 40px; /* Divider mais curto e centralizado */
        margin: 15px auto;
    }

    /* Centralização do header quando colapsado */
    .sidebar.sidebar-collapsed .sidebar-header {
        justify-content: center;
        padding: 0;
        margin-bottom: 30px; /* Mais espaço para os itens */
    }

    .sidebar.sidebar-collapsed .logo-container {
        justify-content: center;
        gap: 0;
    }

    /* Centralização dos links de navegação */
    .sidebar.sidebar-collapsed .sidebar-nav a {
        justify-content: center;
        padding: 14px 0; /* Padding vertical aumentado */
        margin: 2px 0;
        width: 56px; /* Largura fixa para círculo */
        height: 56px; /* Altura fixa para círculo */
        border-radius: 12px; /* Bordas mais arredondadas */
        display: flex;
        align-items: center;
    }

    /* Efeito nos ícones quando colapsado */
    .sidebar.sidebar-collapsed .sidebar-nav a i {
        margin-right: 0;
        font-size: 20px; /* Ícones um pouco maiores */
        width: 24px;
        display: flex;
        justify-content: center;
    }

    /* Efeito hover refinado para estado colapsado */
    .sidebar.sidebar-collapsed .sidebar-nav a:hover {
        background: var(--air-accent-blue);
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    /* Tooltip para estado colapsado */
    .sidebar.sidebar-collapsed .sidebar-nav a {
        position: relative;
    }

    .sidebar.sidebar-collapsed .sidebar-nav a::after {
        content: attr(data-tooltip);
        position: absolute;
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
        background: var(--air-dark-blue);
        color: var(--air-white);
        padding: 8px 12px;
        border-radius: 6px;
        font-size: 14px;
        white-space: nowrap;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        margin-left: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        border: 1px solid var(--air-accent-blue);
    }

    .sidebar.sidebar-collapsed .sidebar-nav a:hover::after {
        opacity: 1;
        visibility: visible;
        margin-left: 15px;
    }

    /* Ajuste do botão quando colapsado */
    .sidebar.sidebar-collapsed .sidebar-toggle {
        right: -16px; /* Mantém a posição */
    }

    /* Perfil do usuário centralizado */
    .sidebar.sidebar-collapsed .user-profile {
        justify-content: center;
        padding: 16px 0;
        margin-top: auto;
        width: 56px;
        margin-left: auto;
        margin-right: auto;
    }

    .sidebar.sidebar-collapsed .avatar-wrapper {
        margin: 0;
    }

    /* Ajuste do scroll para estado colapsado */
    .sidebar.sidebar-collapsed .sidebar-nav {
        margin-right: -8px;
        padding-right: 4px;
    }

    /* Animações suaves para transição */
    .sidebar-nav a,
    .sidebar-nav a i,
    .logo-container,
    .user-profile {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* Efeito de brilho no logo quando colapsado */
    .sidebar.sidebar-collapsed .logo-wrapper:hover {
        transform: scale(1.1);
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
    }

    /* PERFIL DO USUÁRIO */
    .user-profile {
        margin-top: auto;
        padding: 12px;
        background: rgba(255,255,255,0.05);
        border-radius: 12px;
        display: flex;
        align-items: center;
        gap: 12px;
        flex-shrink: 0;
    }

    .avatar-wrapper {
        position: relative;
        width: 42px;
        height: 42px;
        flex-shrink: 0;
    }

    .profile-avatar {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: var(--air-accent-blue);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--air-white);
        font-weight: bold;
        border: 2px solid var(--air-white);
    }

    #logout-btn {
        position: absolute;
        bottom: -2px;
        right: -2px;
        width: 18px;
        height: 18px;
        background: var(--air-white);
        color: var(--air-dark-blue);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        text-decoration: none;
        border: 1px solid var(--air-dark-blue);
    }
    
    .sidebar.sidebar-collapsed .nav-text, 
    .sidebar.sidebar-collapsed .profile-text,
    .sidebar.sidebar-collapsed .logo-container span { 
        display: none; 
    }
`;

const sidebarHTML = `
    <aside class="sidebar">
        <button id="sidebar-toggle-btn" class="sidebar-toggle">
            <i class="fa-solid fa-chevron-left"></i>
        </button>

        <div class="sidebar-header">
            <div class="logo-container">
                <div class="logo-wrapper">
                    <div class="logo-inner">
                        <img src="./img/Airmilhas_Logo.png" alt="AirMilhas">
                    </div>
                </div>
                <span class="nav-text">AirMilhas</span>
            </div>
        </div>

        <nav class="sidebar-nav">
            <ul>
                <li><a href="./Gerente.html" class="nav-link"><i class="fa-solid fa-chart-line"></i> <span class="nav-text">Painel Geral</span></a></li>
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
            <div class="avatar-wrapper">
                <div id="user-profile-avatar" class="profile-avatar">AD</div>
                <a href="index.html" id="logout-btn" title="Sair">
                    <i class="fa-solid fa-power-off"></i>
                </a>
            </div>
            <div class="profile-text">
                <p class="name" id="user-profile-name">Admin AirMilhas</p>
                <p class="role" id="user-profile-role">Gestor de Operações</p>
            </div>
        </div>
    </aside>
`;

// sidebar.js (parte atualizada)

function loadSidebar() {
    const style = document.createElement('style');
    style.textContent = sidebarCSS;
    document.head.appendChild(style);

    const placeholder = document.getElementById('sidebar-placeholder');
    if (placeholder) {
        placeholder.innerHTML = sidebarHTML;
    }

    const sidebar = document.querySelector('.sidebar');
    const toggleBtn = document.getElementById('sidebar-toggle-btn');
    
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('sidebar-collapsed');
            const icon = toggleBtn.querySelector('i');
            
            // Animação mais suave com delay
            setTimeout(() => {
                icon.className = sidebar.classList.contains('sidebar-collapsed') 
                    ? 'fa-solid fa-chevron-right' 
                    : 'fa-solid fa-chevron-left';
            }, 150);
            
            // Adiciona efeito de clique
            toggleBtn.style.transform = 'scale(0.9)';
            setTimeout(() => {
                toggleBtn.style.transform = '';
            }, 200);
        });
    }

    // Adiciona tooltips para os links quando colapsado
    document.querySelectorAll('.nav-link').forEach(link => {
        const textElement = link.querySelector('.nav-text');
        if (textElement) {
            link.setAttribute('data-tooltip', textElement.textContent);
        }
    });

    // Ativa o link atual
    const currentPath = window.location.pathname.split('/').pop() || 'Gerente.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href').includes(currentPath)) {
            link.classList.add('active');
        }
    });

    // Efeito de hover no botão toggle
    if (toggleBtn) {
        toggleBtn.addEventListener('mouseenter', () => {
            toggleBtn.style.transform = 'scale(1.1)';
        });
        
        toggleBtn.addEventListener('mouseleave', () => {
            if (!sidebar.classList.contains('sidebar-collapsed')) {
                toggleBtn.style.transform = '';
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', loadSidebar);