// sidebar.js

// =================================================================================
// 1. CSS PARA A SIDEBAR (com logo circular e funcionalidades completas)
// =================================================================================

const sidebarCSS = `
    .sidebar {
        height: 100vh;
        width: 260px;
        transition: width 0.3s ease;
        display: flex;
        flex-direction: column;
        padding: 16px;
        box-sizing: border-box;
        background: linear-gradient(180deg, #2EC4B6 0%, #018B8B 100%);
        color: #F9FAFB;
        --primary-accent: #2EC4B6;
        --shadow-soft: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
    }

    .sidebar-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 8px;
        flex-shrink: 0;
        position: relative;
        
        margin-bottom: 48px;
        gap: 12px;
    }

    .logo-container {
        display: flex;
        align-items: center;
        gap: 12px;
        flex-grow: 1;
        font-family: 'Montserrat', sans-serif;
        font-size: 20px;
        font-weight: 700;
        white-space: nowrap;
    }

    /* ESTILO DA LOGO CIRCULAR (do primeiro código) */
    .logo-wrapper {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #d6fafaff;
        border: 2px solid #20978bff;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 1);
        transition: all 0.3s ease;
        position: relative;
    }

    .logo-wrapper img {
        width: 75%;
        height: 75%;
        object-fit: contain;
        transition: opacity 0.3s ease;
    }

    .sidebar-nav {
        flex-grow: 1;
        overflow-y: auto;
        margin: 0 -12px;
        padding: 0 10px 0 16px;
    }

    .sidebar-nav::-webkit-scrollbar { width: 6px; }
    .sidebar-nav::-webkit-scrollbar-track { background: transparent; }
    .sidebar-nav::-webkit-scrollbar-thumb { background-color: rgba(255, 255, 255, 0.3); border-radius: 10px; }
    .sidebar-nav::-webkit-scrollbar-thumb:hover { background-color: rgba(255, 255, 255, 0.5); }

    .sidebar-toggle {
        width: 32px;
        height: 32px;
        background-color: transparent;
        border: none;
        border-radius: 6px;
        color: #fff;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        z-index: 10;
    }

    .sidebar-toggle:hover { background-color: rgba(255, 255, 255, 0.15); }

    .user-profile {
        margin-top: 16px;
        padding-top: 16px;
        border-top: 1px solid rgba(255, 255, 255, 0.2);
        display: flex;
        align-items: center;
        gap: 12px;
        transition: all 0.3s ease;
        flex-shrink: 0;
    }

    .profile-avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.2);
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        font-size: 14px;
        flex-shrink: 0;
        overflow: hidden;
    }

    .profile-avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }

    .profile-text {
        overflow: hidden;
    }

    .profile-text p { margin: 0; font-size: 14px; line-height: 1.4; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .profile-text p:first-child { font-weight: 600; color: #fff; }
    .profile-text p:last-child { font-size: 12px; color: rgba(255, 255, 255, 0.7); }

    .sidebar-footer { padding-top: 16px; border-top: 1px solid rgba(255, 255, 255, 0.2); flex-shrink: 0; }
    .sidebar-nav ul, .sidebar-footer ul { list-style: none; padding: 0; margin: 0; }
    .sidebar-nav a, .sidebar-footer a { color: rgba(255, 255, 255, 0.85); text-decoration: none; font-size: 16px; font-weight: 500; padding: 12px 16px; display: flex; align-items: center; border-radius: 8px; transition: all 0.3s ease; white-space: nowrap; }
    .sidebar-nav a i, .sidebar-footer a i { width: 20px; margin-right: 14px; text-align: center; font-size: 1.05em; flex-shrink: 0; }
    .sidebar-nav a:hover, .sidebar-footer a:hover { background-color: rgba(255, 255, 255, 0.1); color: #fff; }
    .sidebar-nav a.active { background-color: #fff; color: var(--primary-accent, #2EC4B6); font-weight: 600; box-shadow: var(--shadow-soft); }

    .nav-divider { height: 1px; background-color: rgba(255, 255, 255, 0.2); margin: 16px 0; }

    /* Dropdown styles (do segundo código) */
    .dropdown-toggle { width: 100%; justify-content: space-between; }
    .dropdown-toggle .chevron-icon { margin-left: auto; margin-right: 0; transition: transform 0.3s ease; }
    .dropdown-menu { max-height: 0; overflow: hidden; transition: max-height 0.3s ease-in-out; padding-left: 0; list-style: none; margin: 0; }
    .dropdown-menu a { padding-left: 48px; font-size: 15px; padding-top: 10px; padding-bottom: 10px; }
    .dropdown-menu a i { margin-right: 12px; }
    .nav-item-dropdown.open > .dropdown-menu { max-height: 500px; margin-top: 4px; }
    .nav-item-dropdown.open > .dropdown-toggle .chevron-icon { transform: rotate(180deg); }

    /* ========================================================================= */
    /* Comportamento da Sidebar Colapsada (com formato da logo circular)
    /* ========================================================================= */

    .sidebar.sidebar-collapsed { 
        width: 70px; 
        padding: 16px 4px;
    }

    .sidebar.sidebar-collapsed .nav-text,
    .sidebar.sidebar-collapsed .logo-container > span,
    .sidebar.sidebar-collapsed .user-profile .profile-text,
    .sidebar.sidebar-collapsed .nav-divider,
    .sidebar.sidebar-collapsed .dropdown-toggle .chevron-icon { 
        display: none; 
        opacity: 0;
        visibility: hidden;
    }

    /* COMPORTAMENTO DA LOGO CIRCULAR AO COLAPSAR (do primeiro código) */
    .sidebar.sidebar-collapsed .logo-wrapper img {
        opacity: 0.5;
    }

    .sidebar.sidebar-collapsed .logo-wrapper {
        border-width: 4px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 1);
    }
    
    /* Centraliza o botão toggle sobre o logo (do primeiro código) */
    .sidebar.sidebar-collapsed .sidebar-toggle {
        color: #20978bff;
        left: 50%;
        top: 45%;
        transform: translate(-50%, -50%);
        background-color: transparent;
        z-index: 10;
    }

    /* Centraliza o logo e o perfil de usuário (do primeiro código) */
    .sidebar.sidebar-collapsed .logo-container, 
    .sidebar.sidebar-collapsed .user-profile {
        justify-content: center;
    }
    .sidebar.sidebar-collapsed .sidebar-header {
        justify-content: center;
    }

    /* Ajusta o espaçamento dos links de navegação (do primeiro código) */
    .sidebar.sidebar-collapsed .sidebar-nav {
        margin: 0;
        padding: 0;
    }
    .sidebar.sidebar-collapsed .sidebar-nav a, 
    .sidebar.sidebar-collapsed .sidebar-footer a { 
        justify-content: center; 
        padding-left: 0; 
        padding-right: 0; 
    }
    
    .sidebar.sidebar-collapsed .sidebar-nav a i,
    .sidebar.sidebar-collapsed .sidebar-footer a i { 
        margin-right: 0; 
        font-size: 1.2em;
    }

    /* Comportamento do Dropdown Colapsado (do segundo código) */
    .sidebar.sidebar-collapsed .dropdown-toggle { cursor: default; }
    .sidebar.sidebar-collapsed .dropdown-menu { max-height: none; overflow: visible; padding-left: 0; }
    .sidebar.sidebar-collapsed .dropdown-menu a { padding-left: 0; justify-content: center; }
    .sidebar.sidebar-collapsed .dropdown-menu a i { margin-right: 0; font-size: 1.1em; }
`;

// =================================================================================
// 2. HTML DA SIDEBAR (com logo circular e estrutura do segundo código)
// =================================================================================
const sidebarHTML = `
    <aside class="sidebar">
        <div class="sidebar-header">
            <div class="logo-container">
                <div class="logo-wrapper">
                    <img src="./img/MindTrack_Logo.png" alt="Logo da MindTrack">
                </div>
                <span class="nav-text">MindTrack</span>
                
                <button id="sidebar-toggle-btn" class="sidebar-toggle">
                    <i class="fa-solid fa-chevron-left"></i>
                </button>
            </div>
        </div>

        <nav class="sidebar-nav">
            <ul>
                <li data-access="5"><a href="./Jornada.html" class="nav-link"><i class="fa-solid fa-seedling"></i> <span class="nav-text">Minha Jornada</span></a></li>
                <li data-access="5"><a href="./Acoes.html" class="nav-link"><i class="fa-solid fa-sun"></i> <span class="nav-text">Ações Diárias</span></a></li>
                <li data-access="5"><a href="./Conquistas.html" class="nav-link"><i class="fa-solid fa-trophy"></i> <span class="nav-text">Conquistas</span></a></li>

                <li class="nav-divider" data-access="5"></li>

                <li class="nav-item-dropdown" data-access="3">
                    <a href="#" class="dropdown-toggle">
                        <span style="display: flex; align-items: center;">
                           <i class="fa-solid fa-users-gear"></i>
                           <span class="nav-text">Gestão da Equipe</span>
                        </span>
                        <i class="fa-solid fa-chevron-down nav-text chevron-icon"></i>
                    </a>
                    
                    <ul class="dropdown-menu">
                        <li data-access="3"><a href="./Gerente.html" class="nav-link"><i class="fa-solid fa-chart-pie"></i> <span class="nav-text">Painel Geral</span></a></li>
                        <li data-access="3"><a href="./Relatorios.html" class="nav-link"><i class="fa-solid fa-file-lines"></i> <span class="nav-text">Relatórios</span></a></li>
                        <li data-access="1"><a href="./Colaboradores.html" class="nav-link"><i class="fa-solid fa-users"></i> <span class="nav-text">Colaboradores</span></a></li>
                        <li data-access="1"><a href="./Alertas.html" class="nav-link"><i class="fa-solid fa-bell"></i> <span class="nav-text">Alertas</span></a></li>
                    </ul>
                </li>
            </ul>
        </nav>

        <div class="sidebar-footer">
             <ul>
                 <li data-access="5"><a href="./Configuracoes.html" class="nav-link"><i class="fa-solid fa-cog"></i> <span class="nav-text">Configurações</span></a></li>
                 <li data-access="5">
                    <a href="#" id="logout-btn">
                        <i class="fa-solid fa-right-from-bracket"></i>
                        <span class="nav-text">Sair</span>
                    </a>
                </li>
            </ul>
        </div>

        <div class="user-profile">
             <div id="user-profile-avatar" class="profile-avatar">
                 </div>
            <div class="profile-text">
                <p id="user-profile-name">Carregando...</p>
                <p id="user-profile-role">...</p>
            </div>
        </div>
    </aside>
`;

// =================================================================================
// 3. FUNÇÕES JAVASCRIPT (do segundo código, mantidas completas)
// =================================================================================

/**
 * Pega as iniciais do nome do usuário.
 * @param {string} name - O nome completo do usuário.
 * @returns {string} As iniciais (ex: "Carlos Silva" -> "CS").
 */
function getInitials(name) {
    if (!name || typeof name !== 'string') return '?';
    const names = name.trim().split(' ');
    if (names.length === 0 || names[0] === '') return '?';
    const firstInitial = names[0][0];
    const lastInitial = names.length > 1 ? names[names.length - 1][0] : '';
    return `${firstInitial}${lastInitial}`.toUpperCase();
}

/**
 * Busca dados do localStorage e atualiza nome, cargo e avatar do perfil.
 */
function updateUserProfileDisplay() {
    const userDataString = localStorage.getItem('mindtrackUser');
    if (!userDataString) {
        console.warn('Dados do usuário não encontrados no localStorage.');
        document.getElementById('user-profile-name').textContent = 'Usuário';
        document.getElementById('user-profile-role').textContent = '...';
        document.getElementById('user-profile-avatar').textContent = '?';
        return null;
    }

    try {
        const user = JSON.parse(userDataString);
        const avatarContainer = document.getElementById('user-profile-avatar');
        const userName = document.getElementById('user-profile-name');
        const userRole = document.getElementById('user-profile-role');

        userName.textContent = user.nome || 'Usuário Anônimo';
        userRole.textContent = user.cargo || 'Cargo não definido';

        avatarContainer.innerHTML = '';
        if (user.profilePicUrl) {
            const img = document.createElement('img');
            img.src = user.profilePicUrl;
            img.alt = 'Foto de Perfil';
            img.onerror = () => {
                console.warn("Falha ao carregar imagem de perfil. Exibindo iniciais.");
                avatarContainer.textContent = getInitials(user.nome);
            };
            avatarContainer.appendChild(img);
        } else {
            avatarContainer.textContent = getInitials(user.nome);
        }
        return user;
    } catch (error) {
        console.error('Erro ao processar dados do usuário do localStorage:', error);
        localStorage.removeItem('mindtrackUser');
        localStorage.removeItem('mindtrackToken');
        if (window.location.pathname !== '/index.html' && window.location.pathname !== '/Cadastro.html') {
            window.location.href = './index.html';
        }
        return null;
    }
}

/**
 * Aplica controle de acesso, escondendo links baseados no nível do usuário.
 * @param {object | null} user - O objeto do usuário recuperado do localStorage.
 */
function applyAccessControl(user) {
    const userLevel = user ? (user.nivelAcesso !== undefined ? parseInt(user.nivelAcesso, 10) : 99) : 99;

    document.querySelectorAll('.sidebar-nav li[data-access], .sidebar-footer li[data-access]').forEach(item => {
        const requiredLevel = parseInt(item.getAttribute('data-access') || '0', 10);
        if (userLevel > requiredLevel) {
            item.style.display = 'none';
        } else {
            item.style.display = '';
        }
    });

    document.querySelectorAll('.nav-item-dropdown').forEach(dropdown => {
        const linksInside = dropdown.querySelectorAll('.dropdown-menu li');
        let allHidden = true;
        linksInside.forEach(link => {
            if (link.style.display !== 'none') {
                allHidden = false;
            }
        });
        if (allHidden) {
            dropdown.style.display = 'none';
        }
    });
}

/**
 * Injeta CSS na página.
 * @param {string} css - O conteúdo CSS a ser injetado.
 */
function injectCSS(css) {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
}

/**
 * Carrega e configura a sidebar.
 */
/**
 * Carrega e configura a sidebar.
 */
function loadSidebar() {
    if (typeof firebase === 'undefined' || !firebase.app.length) {
        console.warn("Firebase não inicializado quando loadSidebar foi chamado. Tentando novamente em 100ms.");
        setTimeout(loadSidebar, 100);
        return;
    }
    const auth = firebase.auth();

    injectCSS(sidebarCSS);

    const placeholder = document.getElementById('sidebar-placeholder');
    if (placeholder) {
        placeholder.innerHTML = sidebarHTML;
    } else {
        console.error("Elemento #sidebar-placeholder não encontrado!");
        return;
    }

    const currentUser = updateUserProfileDisplay();
    applyAccessControl(currentUser);

    // --- Lógica para ativar o link da página atual ---
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    let activeLinkFound = false;

    console.log('Página atual:', currentPage); // Debug

    // Primeiro, remove a classe active de todos os links
    document.querySelectorAll('.sidebar-nav a, .sidebar-footer a').forEach(link => {
        link.classList.remove('active');
    });

    // Depois, encontra e ativa o link correto
    document.querySelectorAll('.sidebar-nav a, .sidebar-footer a').forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref) {
            const linkPage = linkHref.split('/').pop();
            
            // Debug para verificar cada link
            console.log('Verificando link:', linkHref, 'Página do link:', linkPage);
            
            // Comparação mais robusta
            if (linkPage === currentPage ||
                (currentPage === '' && linkPage === 'index.html') ||
                (currentPage === 'index.html' && linkPage === 'index.html') ||
                linkHref.includes(currentPage.replace('.html', ''))) {

                console.log('Link ativado:', linkHref); // Debug
                link.classList.add('active');
                activeLinkFound = true;

                // Abre o dropdown pai se existir
                const parentDropdown = link.closest('.nav-item-dropdown');
                if (parentDropdown && !document.querySelector('.sidebar').classList.contains('sidebar-collapsed')) {
                    parentDropdown.classList.add('open');
                }
            }
        }
    });

    // Se não encontrou nenhum link ativo, tenta uma busca mais flexível
    if (!activeLinkFound) {
        console.log('Nenhum link encontrado com correspondência exata. Buscando correspondência parcial...');
        
        document.querySelectorAll('.sidebar-nav a, .sidebar-footer a').forEach(link => {
            const linkHref = link.getAttribute('href');
            if (linkHref) {
                const linkPage = linkHref.split('/').pop();
                const currentPageWithoutExt = currentPage.replace('.html', '');
                const linkPageWithoutExt = linkPage.replace('.html', '');
                
                if (currentPageWithoutExt === linkPageWithoutExt) {
                    console.log('Link ativado (correspondência parcial):', linkHref);
                    link.classList.add('active');
                    activeLinkFound = true;

                    const parentDropdown = link.closest('.nav-item-dropdown');
                    if (parentDropdown && !document.querySelector('.sidebar').classList.contains('sidebar-collapsed')) {
                        parentDropdown.classList.add('open');
                    }
                }
            }
        });
    }

    // Também ativa o dropdown toggle se um item filho estiver ativo
    if (activeLinkFound) {
        const activeElement = document.querySelector('.sidebar-nav a.active, .sidebar-footer a.active');
        const parentDropdown = activeElement ? activeElement.closest('.nav-item-dropdown') : null;
        if (parentDropdown) {
            parentDropdown.querySelector('.dropdown-toggle').classList.add('active');
        }
    }

    console.log('Link ativo encontrado:', activeLinkFound); // Debug

    // --- Resto do código permanece igual ---
    // --- Lógica para o menu dropdown ---
    document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
        toggle.addEventListener('click', event => {
            event.preventDefault();
            const sidebar = document.querySelector('.sidebar');
            if (!sidebar || sidebar.classList.contains('sidebar-collapsed')) {
                return;
            }
            toggle.closest('.nav-item-dropdown').classList.toggle('open');
        });
    });

    // --- Lógica para o botão de resumir/expandir a sidebar ---
    const sidebar = document.querySelector('.sidebar');
    const toggleBtn = document.getElementById('sidebar-toggle-btn');
    if (sidebar && toggleBtn) {
        const toggleIcon = toggleBtn.querySelector('i');

        const updateIcon = () => {
            if (sidebar.classList.contains('sidebar-collapsed')) {
                toggleIcon.classList.remove('fa-chevron-left');
                toggleIcon.classList.add('fa-chevron-right');
            } else {
                toggleIcon.classList.remove('fa-chevron-right');
                toggleIcon.classList.add('fa-chevron-left');
            }
        };

        if (localStorage.getItem('sidebarState') === 'collapsed') {
            sidebar.classList.add('sidebar-collapsed');
        }
        updateIcon();

        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('sidebar-collapsed');
            const isCollapsed = sidebar.classList.contains('sidebar-collapsed');
            localStorage.setItem('sidebarState', isCollapsed ? 'collapsed' : 'expanded');
            updateIcon();

            document.querySelectorAll('.nav-item-dropdown').forEach(d => {
                if (isCollapsed && d.classList.contains('open')) {
                    // Mantém o estado, mas não faz nada específico
                }
                else if (!isCollapsed && d.querySelector('.dropdown-menu a.active')) {
                    d.classList.add('open');
                }
            });
        });
    } else {
        console.warn("Elemento .sidebar ou #sidebar-toggle-btn não encontrado.");
    }

    // --- Lógica para o botão de logout ---
    const logoutButton = document.getElementById('logout-btn');
    if (logoutButton) {
        logoutButton.addEventListener('click', (e) => {
            e.preventDefault();
            console.log("Realizando logout...");

            auth.signOut().then(() => {
                console.log("Logout do Firebase realizado com sucesso.");
                localStorage.removeItem('mindtrackUser');
                localStorage.removeItem('mindtrackToken');
                window.location.href = './index.html';
            }).catch((error) => {
                console.error("Erro ao fazer logout do Firebase:", error);
                localStorage.removeItem('mindtrackUser');
                localStorage.removeItem('mindtrackToken');
                window.location.href = './index.html';
            });
        });
    } else {
        console.warn("Botão de logout #logout-btn não encontrado.");
    }
}

// Garante que o script seja executado após o carregamento do DOM
document.addEventListener('DOMContentLoaded', loadSidebar);