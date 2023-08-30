document.addEventListener("mousemove", parallax);
function parallax(e) {
    this.querySelecterAll('.layer').forEach(layer => {
        const speed = layer.getattribute('data-speed')
        const x = (window.innerWidth - e.pageX*speed)
        const y = (window.innerHeight - e.pageY*speed)
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
        
    })
}