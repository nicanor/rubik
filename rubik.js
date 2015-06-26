function newFace(color) { return {color: color, pieces: [color,color,color,color,color,color,color,color]}}
function firstRow(face) { return face.pieces.slice(0,3)}
function rows(face) { return [face.pieces.slice(0,3), [face.pieces[3], face.color, face.pieces[4]], face.pieces.slice(5,8)]}
function pr(face, number) { return row(face, number).join();}
function row(face, number) { return rows(face)[number-1]}
function changeRow(face, row) {return {color: face.color, pieces: row.concat(face.pieces.slice(3,8))}}
function rotateRight(face) { return {color: face.color, pieces: face.pieces.slice(6,8).concat(face.pieces.slice(0,6))}}
function rotateLeft(face)  { return {color: face.color, pieces: face.pieces.slice(2,8).concat(face.pieces.slice(0,2))}}
function equalFaces(a_face, other_face) {
  return a_face.color == other_face.color &&
    a_face.pieces[0] == other_face.pieces[0] &&
    a_face.pieces[1] == other_face.pieces[1] &&
    a_face.pieces[2] == other_face.pieces[2] &&
    a_face.pieces[3] == other_face.pieces[3] &&
    a_face.pieces[4] == other_face.pieces[4] &&
    a_face.pieces[5] == other_face.pieces[5] &&
    a_face.pieces[6] == other_face.pieces[6] &&
    a_face.pieces[7] == other_face.pieces[7]
}

//////////////////////////////////////////////////////////

function newCube(c1,c2,c3,c4,c5,c6) {return [newFace(c1), newFace(c2), newFace(c3), newFace(c4), newFace(c5), newFace(c6)]}

function rotateCube(cube) {return [rotateRight(cube[0]), cube[4], cube[1], cube[2],cube[3], rotateLeft(cube[5])]}

function printCube(cube) {
  console.log([pr(cube[0],1),pr(cube[1],1),pr(cube[2],1),pr(cube[3],1),pr(cube[4],1),pr(cube[5],1)]);
  console.log([pr(cube[0],2),pr(cube[1],2),pr(cube[2],2),pr(cube[3],2),pr(cube[4],2),pr(cube[5],2)]);
  console.log([pr(cube[0],3),pr(cube[1],3),pr(cube[2],3),pr(cube[3],3),pr(cube[4],3),pr(cube[5],3)]);
  console.log('');
}
/*
function Cube(options) {
  options || (options = {});
  this.front  = options.front  || new Face('a');
  this.back   = options.back   || new Face('b');
  this.left   = options.left   || new Face('c');
  this.right  = options.right  || new Face('d');
  this.top    = options.top    || new Face('e');
  this.bottom = options.bottom || new Face('f');

  this.equals = function(other) {
    return this.front.equals(other.front) &&
      this.back.equals(other.back) &&
      this.left.equals(other.left) &&
      this.right.equals(other.right) &&
      this.top.equals(other.top) &&
      this.bottom.equals(other.bottom)
  }

  this.rotate_right = function() {
    return new Cube({
      front: this.left,
      left: this.back,
      right: this.front,
      back: this.right,
      top: this.top.rotate_left(),
      bottom: this.bottom.rotate_right(),
    })
  }
  this.print = function(){
    this.front.print();
    this.left.print();
    this.right.print();
    this.back.print();
    this.top.print();
    this.bottom.print();
    return true;
  }
}
*/
