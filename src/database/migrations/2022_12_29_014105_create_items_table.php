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
        Schema::create('items', function (Blueprint $table) {
            $table->integer('cod_siad')->primary();
            $table->string('resumo', 255);
            $table->string('descricao', 255);
            $table->integer('cod_unidade_distribuicao');
            $table->string('unidade_distribuicao');
            $table->integer('multiplus');
            $table->integer('elemento_despesa');
            $table->string('fiscal_suplente');
            $table->string('nome_fiscal');
            $table->string('curva_abc');
            $table->string('class_xyz');
            $table->string('observacoes');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('items');
    }
};
