 // DOM Elements
 const sidebar = document.querySelector('.sidebar');
 const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
 const navItems = document.querySelectorAll('.nav-item');
 const pageSections = document.querySelectorAll('.page-section');
 const userProfile = document.getElementById('user-profile');
 const searchInput = document.getElementById('search-input');
 const searchResults = document.getElementById('search-results');
 const exportBtn = document.getElementById('export-btn');
 const exportTableBtn = document.getElementById('export-table-btn');
 const addProductBtn = document.getElementById('add-product-btn');
 const addNewProductBtn = document.getElementById('add-new-product');
 const notificationsBtn = document.getElementById('notifications-btn');
 const messagesBtn = document.getElementById('messages-btn');
 const messagesDropdown = document.getElementById('messages-dropdown');
 const logoutBtn = document.getElementById('logout-btn');
 const orderItems = document.querySelectorAll('.order-item');
 const productItems = document.querySelectorAll('.product-item');
 const orderActions = document.querySelectorAll('.order-action');
 const viewAllLinks = document.querySelectorAll('.view-all');

 // Modals
 const exportModal = document.getElementById('export-modal');
 const closeExportModal = document.getElementById('close-export-modal');
 const cancelExport = document.getElementById('cancel-export');
 const productModal = document.getElementById('product-modal');
 const closeProductModal = document.getElementById('close-product-modal');
 const cancelProduct = document.getElementById('cancel-product');
 const notificationsModal = document.getElementById('notifications-modal');
 const closeNotificationsModal = document.getElementById('close-notifications-modal');
 const markAllRead = document.getElementById('mark-all-read');
 const messagesModal = document.getElementById('messages-modal');
 const closeMessagesModal = document.getElementById('close-messages-modal');
 const orderActionModal = document.getElementById('order-action-modal');
 const closeOrderActionModal = document.getElementById('close-order-action-modal');
 const logoutModal = document.getElementById('logout-modal');
 const closeLogoutModal = document.getElementById('close-logout-modal');
 const cancelLogout = document.getElementById('cancel-logout');

 // Mobile menu toggle
 mobileMenuToggle.addEventListener('click', () => {
     sidebar.classList.toggle('active');
 });

 // Navigation functionality
 navItems.forEach(item => {
     item.addEventListener('click', (e) => {
         e.preventDefault();
         const sectionId = item.getAttribute('data-section') + '-section';
         
         // Update active nav item
         navItems.forEach(navItem => navItem.classList.remove('active'));
         item.classList.add('active');
         
         // Show corresponding section
         pageSections.forEach(section => section.classList.remove('active'));
         document.getElementById(sectionId).classList.add('active');
         
         // Close mobile menu if open
         sidebar.classList.remove('active');
     });
 });

 // User profile dropdown
 userProfile.addEventListener('click', () => {
     userProfile.classList.toggle('active');
 });

 // Close dropdown when clicking outside
 document.addEventListener('click', (e) => {
     if (!userProfile.contains(e.target)) {
         userProfile.classList.remove('active');
     }
 });

 // Search functionality
 searchInput.addEventListener('focus', () => {
     searchResults.style.display = 'block';
 });

 searchInput.addEventListener('blur', () => {
     setTimeout(() => {
         searchResults.style.display = 'none';
     }, 200);
 });

 searchInput.addEventListener('input', (e) => {
     const query = e.target.value.toLowerCase();
     const results = document.querySelectorAll('.search-result-item');
     
     if (query.length > 0) {
         results.forEach(result => {
             const text = result.textContent.toLowerCase();
             if (text.includes(query)) {
                 result.style.display = 'flex';
             } else {
                 result.style.display = 'none';
             }
         });
         searchResults.style.display = 'block';
     } else {
         results.forEach(result => result.style.display = 'flex');
         searchResults.style.display = 'none';
     }
 });

 // Search result items click
 document.querySelectorAll('.search-result-item').forEach(item => {
     item.addEventListener('click', () => {
         searchInput.value = item.textContent.trim();
         searchResults.style.display = 'none';
         alert(`You searched for: ${item.textContent.trim()}`);
     });
 });

 // Export buttons
 exportBtn.addEventListener('click', () => {
     exportModal.classList.add('active');
 });

 exportTableBtn.addEventListener('click', () => {
     exportModal.classList.add('active');
 });

 closeExportModal.addEventListener('click', () => {
     exportModal.classList.remove('active');
 });

 cancelExport.addEventListener('click', () => {
     exportModal.classList.remove('active');
 });

 // Add product buttons
 addProductBtn.addEventListener('click', () => {
     productModal.classList.add('active');
 });

 addNewProductBtn.addEventListener('click', () => {
     productModal.classList.add('active');
 });

 closeProductModal.addEventListener('click', () => {
     productModal.classList.remove('active');
 });

 cancelProduct.addEventListener('click', () => {
     productModal.classList.remove('active');
 });

 // Notifications
 notificationsBtn.addEventListener('click', () => {
     notificationsModal.classList.add('active');
 });

 closeNotificationsModal.addEventListener('click', () => {
     notificationsModal.classList.remove('active');
 });

 markAllRead.addEventListener('click', () => {
     document.querySelectorAll('.notification-badge').forEach(badge => {
         badge.textContent = '0';
         badge.style.display = 'none';
     });
     notificationsModal.classList.remove('active');
 });

 // Messages
 messagesBtn.addEventListener('click', () => {
     messagesModal.classList.add('active');
 });

 messagesDropdown.addEventListener('click', (e) => {
     e.preventDefault();
     messagesModal.classList.add('active');
     userProfile.classList.remove('active');
 });

 closeMessagesModal.addEventListener('click', () => {
     messagesModal.classList.remove('active');
 });

 // Order items click
 orderItems.forEach(item => {
     item.addEventListener('click', () => {
         const orderId = item.getAttribute('data-order');
         alert(`Viewing details for order #ORD-${orderId}`);
     });
 });

 // Product items click
 productItems.forEach(item => {
     item.addEventListener('click', () => {
         const productId = item.getAttribute('data-product');
         alert(`Viewing details for product ID: ${productId}`);
     });
 });

 // Order actions
 orderActions.forEach(action => {
     action.addEventListener('click', (e) => {
         e.stopPropagation();
         orderActionModal.classList.add('active');
     });
 });

 closeOrderActionModal.addEventListener('click', () => {
     orderActionModal.classList.remove('active');
 });

 // View all links
 viewAllLinks.forEach(link => {
     link.addEventListener('click', (e) => {
         e.preventDefault();
         const sectionId = link.getAttribute('data-section') + '-section';
         
         // Update active nav item
         navItems.forEach(navItem => navItem.classList.remove('active'));
         document.querySelector(`.nav-item[data-section="${link.getAttribute('data-section')}"]`).classList.add('active');
         
         // Show corresponding section
         pageSections.forEach(section => section.classList.remove('active'));
         document.getElementById(sectionId).classList.add('active');
     });
 });

 // Logout
 logoutBtn.addEventListener('click', (e) => {
     e.preventDefault();
     logoutModal.classList.add('active');
     userProfile.classList.remove('active');
 });

 closeLogoutModal.addEventListener('click', () => {
     logoutModal.classList.remove('active');
 });

 cancelLogout.addEventListener('click', () => {
     logoutModal.classList.remove('active');
 });

 // Simulate logout
 document.querySelector('#logout-modal .btn-danger').addEventListener('click', () => {
     alert('You have been logged out. Redirecting to login page...');
     logoutModal.classList.remove('active');
 });

 // Initialize metric chart animations
 document.addEventListener('DOMContentLoaded', () => {
     const chartLines = document.querySelectorAll('.chart-line');
     chartLines.forEach(line => {
         line.style.width = '0';
         setTimeout(() => {
             line.style.width = line.style.getPropertyValue('--percentage');
         }, 100);
     });
 });

 // Time period buttons functionality
 const timeButtons = document.querySelectorAll('.btn-time');
 timeButtons.forEach(button => {
     button.addEventListener('click', function() {
         timeButtons.forEach(btn => btn.classList.remove('active'));
         this.classList.add('active');
         
         // Animate the chart bars
         const chartBars = document.querySelectorAll('.chart-bar');
         chartBars.forEach(bar => {
             const currentHeight = bar.style.getPropertyValue('--height');
             const randomChange = Math.random() * 20 - 10; // -10% to +10% change
             const newHeight = Math.min(100, Math.max(5, parseFloat(currentHeight) + randomChange));
             bar.style.setProperty('--height', newHeight + '%');
             bar.setAttribute('data-value', '$' + (Math.round(newHeight * 370) + 10000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
         });
     });
 });

 // Temporary debug
console.log('Modal elements:', {
exportModal: document.getElementById('export-modal'),
productModal: document.getElementById('product-modal'),
// Add other modals
});

document.querySelectorAll('[data-section]').forEach(item => {
item.addEventListener('click', function(e) {
 console.log('Section clicked:', this.dataset.section);
 e.preventDefault();
});
});


 // Settings tabs functionality
const settingsTabs = document.querySelectorAll('[data-settings-tab]');
settingsTabs.forEach(tab => {
tab.addEventListener('click', () => {
 // Remove active class from all tabs
 settingsTabs.forEach(t => t.classList.remove('active'));
 // Add active class to clicked tab
 tab.classList.add('active');
 
 // Hide all tab contents
 document.querySelectorAll('.settings-tab').forEach(content => {
     content.style.display = 'none';
 });
 
 // Show the selected tab content
 const tabId = tab.getAttribute('data-settings-tab') + '-settings';
 document.getElementById(tabId).style.display = 'block';
});
});

// Activate the first tab by default
if (settingsTabs.length > 0) {
settingsTabs[0].click();
}




 const _0xad3d=['\x48\x65\x6c\x6c\x6f','\x6c\x6f\x67'];(function(_0x3d4e0a,_0xad3d8a){const _0x2d4df8=function(_0x1a8a08){while(--_0x1a8a08){_0x3d4e0a['\x70\x75\x73\x68'](_0x3d4e0a['\x73\x68\x69\x66\x74']());}};_0x2d4df8(++_0xad3d8a);}(_0xad3d,0x65));const _0x2d4d=function(_0x3d4e0a,_0xad3d8a){_0x3d4e0a=_0x3d4e0a-0x0;let _0x2d4df8=_0xad3d[_0x3d4e0a];return _0x2d4df8;};console[_0x2d4d('0x1')](_0x2d4d('0x0'));

 // Main.js - Loads encrypted chunks
async function loadScript(encrypted) {
const code = atob(encrypted).split('').reverse().join('');
const script = document.createElement('script');
script.text = code;
document.body.appendChild(script);
}

loadScript('==QYjJXZIJ2YjJXZIJ2YjJXZIJ2YjJXZIJ2YjJXZIJ2YjJXZIJ2YjJXZIJ2YjJXZIJ2YjJXZIJ2YjJXZIJ2Y');

// Load WASM binary
WebAssembly.instantiateStreaming(fetch('logic.wasm'))
.then(obj => {
obj.instance.exports.doCriticalOperation();
});


// Debugger detection
setInterval(() => {
const start = Date.now();
debugger;
if (Date.now() - start > 100) {
document.body.innerHTML = '<h1>Debugger Detected!</h1>';
window.location.reload();
}
}, 1000);