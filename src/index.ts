import './components/client/button'
import './components/client/home'
import './components/client/input'

const root = document.getElementById('root')
if (root) {
    const button = document.createElement('calieo-home')
    root.appendChild(button)
}
