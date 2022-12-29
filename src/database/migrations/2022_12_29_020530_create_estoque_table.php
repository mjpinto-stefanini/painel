<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('estoque', function (Blueprint $table) {
            $table->id();
            $table->integer('id_almoxarifado')->foreign('id')->on('almoxarifados');
            $table->integer('cod_siaf')->foreign('cod_siaf')->on('items');
            $table->boolean('perecivel');
            $table->date('dt_implantacao');
            $table->date('dt_ultimo_movimento');
            $table->integer('qtde_implantados');
            $table->integer('qtde_estoque');
            $table->integer('qtde_disponivel');
            $table->float('valor_total', 8, 2);
            $table->float('consumo_mensal', 8, 2);
            $table->integer('estoque_maximo');
            $table->integer('estoque_minimo');
            $table->integer('ponto_ressuprimento');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('estoque');
    }
};
