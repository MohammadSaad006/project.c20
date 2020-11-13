function isTouching(obj1,obj2){
    if (obj1.x-obj2.x<obj1.width/2+obj2.width/2&&
      obj2.x-obj1.x<obj2.width/2+obj2.width/2&&
     obj1.y-obj2.y<obj1.height/2+obj2.height/2&&
      obj2.y-obj1.y<obj1.height/2+obj2.height/2){
      return true  
  }
  else {
    return false
  }
  }
  function hasCollided(bullet,wall)
  {
    bulletRightEdge=bullet.x +bullet.width;
    wallLeftEdge=wall.x;
    if (bulletRightEdge>=wallLeftEdge){
    return true
    }
    return false
}