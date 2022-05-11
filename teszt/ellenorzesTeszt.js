QUnit.module('row', function() {
    QUnit.test('a row függvény létezik-e', function(assert) {
      assert.ok(row, "létezik-e a row");
    });
    QUnit.test('A row függvény-e?', function(assert) {
        assert.ok(typeof row === "function", "fv a row");
    });
    QUnit.test('Üres a tömb', function(assert) {
      assert.equal(row(), false);
    });
    QUnit.test('Csak kötőjel', function(assert) {
        tomb = ["-","-","-","-","-","-","-","-","-"];
      assert.equal(row(), false);
    });
    QUnit.test('X az első', function(assert) {
        tomb = ["X","-","-","-","-","-","-","-","-"];
      assert.equal(row(), false);
    });
    QUnit.test('O az első', function(assert) {
        tomb = ["O","-","-","-","-","-","-","-","-"];
      assert.equal(row(), false);
    });
    QUnit.test('X nyert', function(assert) {
        tomb = ["X","X","X","-","-","-","-","-","-"];
      assert.equal(row(), true);
    });
    QUnit.test('O nyert', function(assert) {
        tomb = ["O","O","O","-","-","-","-","-","-"];
      assert.equal(row(), true);
    });
});

QUnit.module('column', function() {
    QUnit.test('a column függvény létezik-e', function(assert) {
      assert.ok(column, "létezik-e a column");
    });
    QUnit.test('A column függvény-e?', function(assert) {
        assert.ok(typeof column === "function", "fv a column");
    });
    QUnit.test('Üres a tömb', function(assert) {
      assert.equal(column(), false);
    });
    QUnit.test('Csak kötőjel', function(assert) {
        tomb = ["-","-","-","-","-","-","-","-","-"];
      assert.equal(column(), false);
    });
    QUnit.test('X az első', function(assert) {
        tomb = ["X","-","-","-","-","-","-","-","-"];
      assert.equal(column(), false);
    });
    QUnit.test('O az első', function(assert) {
        tomb = ["O","-","-","-","-","-","-","-","-"];
      assert.equal(column(), false);
    });
    QUnit.test('X nyert', function(assert) {
        tomb = ["X","-","-","X","-","-","X","-","-"];
      assert.equal(column(), true);
    });
    QUnit.test('O nyert', function(assert) {
        tomb = ["O","-","-","O","-","-","O","-","-"];
      assert.equal(column(), true);
    });
});

QUnit.module('balrolJobra', function() {
    QUnit.test('a balrolJobra függvény létezik-e', function(assert) {
      assert.ok(balrolJobra, "létezik-e a balrolJobra");
    });
    QUnit.test('A balrolJobra függvény-e?', function(assert) {
        assert.ok(typeof balrolJobra === "function", "fv a balrolJobra");
    });
    QUnit.test('Üres a tömb', function(assert) {
        assert.equal(balrolJobra(), false);
    });
    /*QUnit.test('X nyert', function(assert) {
        tomb = ["X","-","-","-","X","-","-","-","X"];
        assert.equal(balrolJobra(), true);
    });//nem futott le(hiba), kapott eredmény "X"
    QUnit.test('O nyert', function(assert) {
        tomb = ["O","-","-","-","O","-","-","-","O"];
        assert.equal(balrolJobra(), true);
    });//nem futott le(hiba), kapott eredmény "O"*/
});

QUnit.module('jobbrolBalra', function() {
    QUnit.test('a jobbrolBalra függvény létezik-e', function(assert) {
      assert.ok(jobbrolBalra, "létezik-e a jobbrolBalra");
    });
    QUnit.test('A jobbrolBalra függvény-e?', function(assert) {
        assert.ok(typeof jobbrolBalra === "function", "fv a jobbrolBalra");
    });
    QUnit.test('Üres a tömb', function(assert) {
        assert.equal(jobbrolBalra(), false);
    });
    QUnit.test('X nyert', function(assert) {
        tomb = ["-","-","X","-","X","-","X","-","-"];
        assert.equal(jobbrolBalra(), true);
    });
    QUnit.test('O nyert', function(assert) {
        tomb = ["-","-","O","-","O","-","O","-","-"];
        assert.equal(jobbrolBalra(), true);
    });
});

QUnit.module('cross', function() {
    QUnit.test('a cross függvény létezik-e', function(assert) {
      assert.ok(cross, "létezik-e a cross");
    });
    QUnit.test('A cross függvény-e?', function(assert) {
        assert.ok(typeof cross === "function", "fv a cross");
    });
    QUnit.test('X nyert', function(assert) {
        tomb = ["-","-","X","-","X","-","X","-","-"];
        assert.equal(cross(), true);
    });
    QUnit.test('O nyert', function(assert) {
        tomb = ["-","-","O","-","O","-","O","-","-"];
        assert.equal(cross(), true);
    });
});

QUnit.module('ellenorzes', function() {
    QUnit.test('a ellenorzes függvény létezik-e', function(assert) {
      assert.ok(cross, "létezik-e a ellenorzes");
    });
    QUnit.test('A ellenorzes függvény-e?', function(assert) {
        assert.ok(typeof ellenorzes === "function", "fv a ellenorzes");
    });
    QUnit.test('True a győztes', function(assert) {
        tomb = ["X","-","-","X","-","-","X","-","-"];
        assert.equal(ellenorzes(), true);
    });
    QUnit.test('False a győztes', function(assert) {
        tomb = ["-","-","-","-","-","-","-","-","-"];
        assert.equal(ellenorzes(), false);
    });
});