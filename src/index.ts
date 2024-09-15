import './components/client/button'
import './components/client/input'
import './components/client/text'
import './components/client/home'

const root = document.getElementById('root')
if (root) {
    const button = document.createElement('calieo-home')
    root.appendChild(button)
}
