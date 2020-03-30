<script>
    export let postdata;

</script>

<style>
    .article{
        background:white;
        color:rgb(34, 34, 34);
        display:flex;
        flex-direction:column;
        padding:10px;
        margin:20px;
        width:32%;
    }

    h2{
        font-size:2.5rem;
        line-height:100%;
        margin: 10px 0;
    }
    h3{
        font-size:0.8rem;
    }

    .img{
        width:100%;
        height: 200px;
        background: white;
        background-position:center;
        background-size:cover;
    }
</style>

    <div class="article">    
    <a href="/insights/{postdata.slug}">
    <div class="img" style="background-image:url({postdata.feature_image})"></div>
    <h2>{postdata.title}</h2>
    <h3>
    {postdata.published_at} | {postdata.reading_time} MIN READ
    </h3>
    {@html postdata.excerpt}
    </a>
    </div>
    