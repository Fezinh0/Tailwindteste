tailwind.config = {
    theme: {
        extend: {
            colors: {
                azul: {
                    claro: '#c5dfff',
                    escuro: '#061e3c',
                    hover: '#1057bb'
                },
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif']
            },
            Keyframes: {
                sino_kf: {
                    '0%, 100%': {
                        transform: 'rotate(-10deg)'
                    },
                    '50%': {
                        transform: 'rotate(10deg)'
                    }
                }
            },
            animation: {
                sino: 'sino_kf 0.31s ease-in-out infinite'
            }
        }

    }
}