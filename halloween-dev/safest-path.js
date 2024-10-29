function findSafestPath(dream) {
    // Recorrer todos los caminos posibles y quedarse con el menos peligroso
    // Solo te puedes mover hacia la derecha (i + 1) o hacia abajo (j + 1)
    
    const f = dream.length-1 
    const c = dream.length-1 

    console.log("inicio "+dream[0][0])
    console.log("final "+dream[f][c])







    return 0
  }

  const dream = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
  ]

  console.log(findSafestPath(dream))

  /* 
  1 0
  0 1
  
  
  */