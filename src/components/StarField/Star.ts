interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  speed: number;
  brightness: number;
  color: string;
}

interface TouchPosition {
  x: number;
  y: number;
  radius: number;
}

export class StarPoint {
  private star: Star;
  private maxDepth: number;
  private originalX: number;
  private originalY: number;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.maxDepth = 1000;
    this.star = this.createStar(canvasWidth, canvasHeight);
    this.originalX = this.star.x;
    this.originalY = this.star.y;
  }

  private createStar(width: number, height: number): Star {
    // Generate a random color between blue and white
    const hue = Math.random() * 60 + 200; // Range from 200 to 260 (blues)
    const saturation = Math.random() * 50 + 50; // 50-100%
    const lightness = Math.random() * 30 + 70; // 70-100%
    
    return {
      x: Math.random() * width - width / 2,
      y: Math.random() * height - height / 2,
      z: Math.random() * this.maxDepth,
      size: 1 + Math.random() * 2,
      speed: 0.5 + Math.random() * 1.5,
      brightness: Math.random(),
      color: `hsla(${hue}, ${saturation}%, ${lightness}%, 1)`
    };
  }

  update(
    mouseX: number, 
    mouseY: number, 
    width: number, 
    height: number, 
    touchPosition: TouchPosition | null
  ): void {
    // Basic star movement
    this.star.z -= this.star.speed;
    
    if (this.star.z <= 0) {
      this.star.z = this.maxDepth;
      this.star.x = Math.random() * width - width / 2;
      this.star.y = Math.random() * height - height / 2;
      this.originalX = this.star.x;
      this.originalY = this.star.y;
    }

    // Mouse interaction
    const mouseXEffect = (mouseX - width / 2) * 0.001;
    const mouseYEffect = (mouseY - height / 2) * 0.001;
    
    this.star.x += mouseXEffect;
    this.star.y += mouseYEffect;

    // Touch effect
    if (touchPosition) {
      const dx = (this.star.x + width / 2) - touchPosition.x;
      const dy = (this.star.y + height / 2) - touchPosition.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < touchPosition.radius) {
        const angle = Math.atan2(dy, dx);
        const force = (touchPosition.radius - distance) / touchPosition.radius;
        
        this.star.x += Math.cos(angle) * force * 5;
        this.star.y += Math.sin(angle) * force * 5;
      } else {
        // Gradually return to original position
        this.star.x += (this.originalX - this.star.x) * 0.05;
        this.star.y += (this.originalY - this.star.y) * 0.05;
      }
    }
  }

  draw(ctx: CanvasRenderingContext2D, width: number, height: number): void {
    const perspective = width / 2;
    const projectedX = (this.star.x * perspective) / this.star.z + width / 2;
    const projectedY = (this.star.y * perspective) / this.star.z + height / 2;
    const projectedSize = (1 - this.star.z / this.maxDepth) * this.star.size * 2;

    const brightness = (1 - this.star.z / this.maxDepth) * this.star.brightness;
    
    // Create a gradient for the star
    const gradient = ctx.createRadialGradient(
      projectedX, projectedY, 0,
      projectedX, projectedY, projectedSize * 2
    );
    
    gradient.addColorStop(0, this.star.color);
    gradient.addColorStop(1, 'transparent');

    ctx.beginPath();
    ctx.arc(projectedX, projectedY, projectedSize * 2, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();

    // Add a center point for extra brightness
    ctx.beginPath();
    ctx.arc(projectedX, projectedY, projectedSize * 0.5, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, ' + brightness + ')';
    ctx.fill();
  }
}