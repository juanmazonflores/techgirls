<template>
	<ul class="list-group">
        <li class="list-group-item ">
            <div class=" d-flex align-items-center gap-2 px-0">
                <img
                    class="avatar-img"
                    :src="answer.picture"
                    alt="Avatar"/>
                <h4 class="card-header-title">
                    <router-link style="text-decoration: none; color: inherit;" to="/profile">
                        {{ answer.name }}
                    </router-link>
                </h4>
            </div>
            
            <p class=" d-flex text ">{{answer.text}}</p>

            <div class=" d-flex align-items-center gap-2 px-0">
                <small class="text-muted card-header-subTitle">Hace dos minutos</small>
                <button
                    class="card-header-subTitle btn d-flex justify-content-center align-items-center gap-2 px-0">
                    <span class="material-icons-round card-header-subTitle"> thumb_up </span>
                    Me gusta
                </button>
                
            </div>

        </li>
        
		
	</ul>
</template>

<script>
    
	export default {
        name: 'CardAnswer',
		props: ['answer'],
    }
</script>

<style scoped>

	h4{
		color: var(--color-font);
		text-decoration:none;
	}
	h4:hover{
		font-weight: 700;
		text-decoration:none;
	}
    

	.btn:hover {
		color: #5044c9;
	}
    .card-header {
		background-color: transparent;
		padding: 0.5rem 1rem;
		padding-bottom: 0;
		border-bottom: none;
	}

	.avatar-img {
		width: 30px;
		height: 30px;
		
		border-radius: 50%;
	}

	.card-header-subTitle {
		font-size: 0.8em;
	}

	.card-header-title {
		line-height: 0.5;
        font-size: 100%;
	}

	.more-btn {
		border-radius: 50%;
		padding: 0.5em;
		margin: 0.3em;
	}
    .container-username{
  
        display:flex;
        flex-direction:column;

    }

	.btn:hover {
		color: var(--color-font);
	}

    .text{
        margin-bottom: 0;
    }
	@media (min-width: 576px) {
		.card-header .col-8 {
			margin-left: 1em;
		}
	}
</style>