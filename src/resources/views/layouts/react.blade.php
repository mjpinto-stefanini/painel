<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    @include('includes.head')
</head>

<body class="ltr horizontalmenu">
    <noscript>Você precisa habilitar Javascript para rodar esta aplicação.</noscript>
    @inertia
    <div id="root"></div>

</body>
</html>