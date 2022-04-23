const sidebarOpen = document.querySelector('.sidebar__link-open')
const sidebar = document.querySelector('.sidebar')
const sidebarItem = document.querySelectorAll('.person-item')
const personView = document.querySelectorAll('.person-active')
let itemName

sidebarOpen.addEventListener('click', () => {
	sidebar.classList.toggle('sidebar-open')
})

sidebarItem.forEach(item => item.addEventListener('click', selectItemActive))

function selectItemActive() {
	sidebarItem.forEach(item => {
		item.classList.remove('person-item_active')
	})
	this.classList.add('person-item_active')
	itemName = this.getAttribute('data-person')
	itemActiveView(itemName)
}

function itemActiveView(itemName) {
	personView.forEach(item => {
		item.classList.contains(itemName)
			? item.classList.add('_icon-viewed')
			: item.classList.remove('_icon-viewed')
	})
}
