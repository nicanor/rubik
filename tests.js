QUnit.test( "Assert", function( assert ) {
  assert.ok( 1 == "1", "Este método siempre está bien!" );
});

QUnit.test( "New Face", function( assert ) {
  assert.deepEqual( {color: 'a', pieces: ['a','a','a','a','a','a','a','a']}, newFace('a') , "Crea una cara de un sólo color correctamente." );
});

QUnit.test( "First Row", function( assert ) {
  assert.deepEqual( [1,2,3], firstRow({color: 1, pieces: [1,2,3,4,5,6,7,8]}), "Retorna la primera fila de la cara." );
});

QUnit.test( "Change Row", function( assert ) {
  var original = {color: 1, pieces: [1,2,3,4,5,6,7,8]}
  var expected = {color: 1, pieces: [9,8,7,4,5,6,7,8]};
  var result   = changeRow(original, [9,8,7]);
  assert.deepEqual(result, expected, "Cambia la primer fila de la cara por la especificada.");
});

QUnit.test( "Rotate Right", function( assert ) {
  var original = {color: 1, pieces: [1,2,3,4,5,6,7,8]};
  var expected = {color: 1, pieces: [7,8,1,2,3,4,5,6]};
  assert.deepEqual(rotateRight(original), expected, "Rota la cara a la derecha.");
});

QUnit.test( "Rotate Left", function( assert ) {
  var original = {color: 1, pieces: [1,2,3,4,5,6,7,8]};
  var expected = {color: 1, pieces: [3,4,5,6,7,8,1,2]};
  assert.deepEqual(rotateLeft(original), expected, "Rota la cara a la izquierda.");
});

QUnit.test( "Rows", function( assert ) {
  var original = {color: 5, pieces: [1,2,3,4,6,7,8,9]};
  var expected = [[1,2,3],[4,5,6],[7,8,9]];
  assert.deepEqual(rows(original), expected, "Retorna las filas de la cara.");
});

QUnit.test( "Row", function( assert ) {
  var original = {color: 5, pieces: [1,2,3,4,6,7,8,9]};
  var expected = [1,2,3];
  assert.deepEqual(row(original, 1), expected, "Retorna una fila de la cara.");
});

QUnit.test( "New Cube", function( assert ) {
  var expected = [newFace(1), newFace(2), newFace(3), newFace(4), newFace(5), newFace(6)];
  assert.deepEqual(newCube(1,2,3,4,5,6), expected, "Crea un cubo.");
});

QUnit.test( "Rotate Cube", function( assert ) {
  var original = [{color: 1, pieces: [2,2,2,1,2,2,2,1]}, newFace(2), newFace(3), newFace(4), newFace(5), {color: 1, pieces: [2,2,2,1,3,3,3,1]}];
  var expected = [{color: 1, pieces: [2,1,2,2,2,1,2,2]}, newFace(5), newFace(2), newFace(3), newFace(4), {color: 1, pieces: [2,1,3,3,3,1,2,2]}];
  printCube(original);
  printCube(rotateCube(original));
  var same_cube = rotateCube(rotateCube(rotateCube(rotateCube(original))));

  assert.deepEqual(rotateCube(original), expected, "Rota cubo correctamente.");
  assert.deepEqual(original, same_cube, "Cubo rotado 4 veces vuelve a la posición original.");
});

/*
QUnit.test( "Cube", function( assert ) {
  cube = new Cube({});
  assert.ok(cube.equals(cube));
  assert.ok(cube.print());
  assert.ok(cube.equals(cube.rotate_right()));
  //assert.ok(cube.front.equals(new Face('a')));
  //assert.ok(cube.rotate_right.front.equals(cube.left));
});
*/