import random
import tkinter as tk
from tkinter import messagebox

puntajeRegalo = 1000
puntajeGanancia = 10
puntajePerdida = 20

# Función para el juego 1
def juego_1():
    global puntajeRegalo
    ventana_juego_1 = tk.Toplevel()
    ventana_juego_1.title("Juego 1: Escoger el número")
    
    numero_aleatorio = random.randint(1, 5)

    label_puntaje = tk.Label(ventana_juego_1, text=f'Tu puntaje es de: {puntajeRegalo}')
    label_puntaje.pack()

    label_instrucciones = tk.Label(ventana_juego_1, text="Por favor, ingresa un número entero entre 1 y 5:")
    label_instrucciones.pack()

    entry_numero = tk.Entry(ventana_juego_1)
    entry_numero.pack()

    btn_verificar = tk.Button(ventana_juego_1, text="Verificar", command=lambda: verificar_numero(entry_numero.get(), numero_aleatorio, ventana_juego_1))
    btn_verificar.pack()

# Función para el juego 2
def juego_2():
    global puntajeRegalo
    ventana_juego_2 = tk.Toplevel()
    ventana_juego_2.title("Juego 2: Cara o Cruz")
    
    opciones = ['cara', 'cruz']

    label_puntaje = tk.Label(ventana_juego_2, text=f'Tu puntaje es de: {puntajeRegalo}')
    label_puntaje.pack()

    label_instrucciones = tk.Label(ventana_juego_2, text="Elige cara o cruz:")
    label_instrucciones.pack()

    entry_eleccion = tk.Entry(ventana_juego_2)
    entry_eleccion.pack()

    btn_verificar = tk.Button(ventana_juego_2, text="Verificar", command=lambda: verificar_eleccion(entry_eleccion.get().lower(), opciones, ventana_juego_2))
    btn_verificar.pack()

# Función para el juego 3
def juego_3():
    global puntajeRegalo
    opciones = ['piedra', 'papel', 'tijera']

    ventana_juego_3 = tk.Toplevel()
    ventana_juego_3.title("Juego 3: Piedra, Papel o Tijera")

    def verificar_eleccion(eleccion):
        global puntajeRegalo
        if eleccion not in opciones:
            messagebox.showerror("Error", "Opción no válida.")
            return
        eleccion_aleatoria = random.choice(opciones)
        messagebox.showinfo("Elección", f"Tu elección: {eleccion}\nElección aleatoria: {eleccion_aleatoria}")
        if eleccion == eleccion_aleatoria:
            messagebox.showinfo("¡Empate!", "¡Empate!")
        elif (eleccion == 'piedra' and eleccion_aleatoria == 'tijera') or \
             (eleccion == 'papel' and eleccion_aleatoria == 'piedra') or \
             (eleccion == 'tijera' and eleccion_aleatoria == 'papel'):
            messagebox.showinfo("¡Bien hecho!", f'¡Bien hecho! \nTu puntaje es de: {puntajeRegalo}')
            puntajeRegalo += puntajeGanancia
        else:
            messagebox.showinfo("¡Fallaste!", f'¡Fallaste! \nTu puntaje es de: {puntajeRegalo}')
            puntajeRegalo -= puntajePerdida
        ventana_juego_3.destroy()

    label_puntaje = tk.Label(ventana_juego_3, text=f'Tu puntaje es de: {puntajeRegalo}')
    label_puntaje.pack()

    label_instrucciones = tk.Label(ventana_juego_3, text="Elige piedra, papel o tijera:")
    label_instrucciones.pack()

    entry_eleccion = tk.Entry(ventana_juego_3)
    entry_eleccion.pack()

    btn_verificar = tk.Button(ventana_juego_3, text="Verificar", command=lambda: verificar_eleccion(entry_eleccion.get().lower()))
    btn_verificar.pack()

# Función para el juego 4 
def juego_4():
    global puntajeRegalo
    ventana_juego_4 = tk.Toplevel()
    ventana_juego_4.title("Juego 4: Mayor o Menor")
    
    label_puntaje = tk.Label(ventana_juego_4, text=f'Tu puntaje es de: {puntajeRegalo}')
    label_puntaje.pack()

    label_instrucciones = tk.Label(ventana_juego_4, text="Elige un número del 1 al 10:")
    label_instrucciones.pack()

    entry_numero = tk.Entry(ventana_juego_4)
    entry_numero.pack()

    btn_verificar = tk.Button(ventana_juego_4, text="Verificar", command=lambda: verificar_numero_4(entry_numero.get(), ventana_juego_4))
    btn_verificar.pack()

# Función para el juego 5
def juego_5():
    global puntajeRegalo

    # Función para obtener el valor de una carta
    def obtener_valor_carta(carta):
        if carta in ['J', 'Q', 'K']:
            return 10
        elif carta == 'A':
            return 11
        else:
            return int(carta)

    # Función para obtener la suma de las cartas
    def obtener_suma_cartas(cartas):
        suma = sum(obtener_valor_carta(carta) for carta in cartas)
        # Si la suma supera 21 pero hay un As, se ajusta el valor del As de 11 a 1
        while suma > 21 and 'A' in cartas:
            cartas.remove('A')
            cartas.append('A')
            suma = sum(obtener_valor_carta(carta) for carta in cartas)
        return suma

    def obtener_carta():
        return str(random.randint(2, 8))  # Cartas menores a 9

    cartas_jugador = [obtener_carta(), obtener_carta()]
    cartas_sistema = [obtener_carta(), obtener_carta()]

    ventana_juego_5 = tk.Toplevel()
    ventana_juego_5.title("Juego 5: Blackjack")

    label_puntaje = tk.Label(ventana_juego_5, text=f'Tu puntaje es de: {puntajeRegalo}')
    label_puntaje.pack()

    label_instrucciones = tk.Label(ventana_juego_5, text="Presiona 'Pedir carta' para recibir una carta o 'Detenerse' para terminar tu turno.")
    label_instrucciones.pack()

    label_cartas_jugador = tk.Label(ventana_juego_5, text="Tus cartas: " + ' '.join(cartas_jugador))
    label_cartas_jugador.pack()

    label_cartas_sistema = tk.Label(ventana_juego_5, text="Cartas del sistema: " + '# ' * len(cartas_sistema))
    label_cartas_sistema.pack()

    label_suma_cartas_jugador = tk.Label(ventana_juego_5, text=f"Suma de tus cartas: {obtener_suma_cartas(cartas_jugador)}")
    label_suma_cartas_jugador.pack()

    def pedir_carta():
        global puntajeRegalo
        carta = random.choice(['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'])
        cartas_jugador.append(carta)
        label_cartas_jugador.config(text=f"Tus cartas: {' '.join(cartas_jugador)}")
        suma_cartas_jugador = obtener_suma_cartas(cartas_jugador)
        label_suma_cartas_jugador.config(text=f"Suma de tus cartas: {suma_cartas_jugador}")
        if suma_cartas_jugador > 21:
            puntajeRegalo -= puntajePerdida
            messagebox.showinfo("¡Perdiste!", f"¡Perdiste! Has superado 21. \nTu puntaje es de: {puntajeRegalo}")
            puntajeRegalo -= puntajePerdida
            ventana_juego_5.destroy()

    def detenerse():
        global puntajeRegalo
        suma_cartas_jugador = obtener_suma_cartas(cartas_jugador)
        suma_cartas_sistema = obtener_suma_cartas(cartas_sistema)

        # Si la suma de las cartas del sistema es menor a 21, el sistema pedirá una carta adicional
        while suma_cartas_sistema <= 21:
            carta = obtener_carta()
            cartas_sistema.append(carta)
            suma_cartas_sistema = obtener_suma_cartas(cartas_sistema)
            label_cartas_sistema.config(text="Cartas del sistema: " + ' '.join(cartas_sistema))

        if suma_cartas_jugador > 21:
            puntajeRegalo -= puntajePerdida
            messagebox.showinfo("¡Perdiste!", f"¡Perdiste! Has superado 21. \nTu puntaje es de: {puntajeRegalo}")
        elif suma_cartas_sistema > 21 or suma_cartas_jugador > suma_cartas_sistema:
            puntajeRegalo += puntajeGanancia
            messagebox.showinfo("¡Ganaste!", f"¡Ganaste! Tu puntaje: {suma_cartas_jugador} \nPuntaje del sistema: {suma_cartas_sistema} \nTu puntaje es de: {puntajeRegalo}")
        elif suma_cartas_jugador == suma_cartas_sistema:
            messagebox.showinfo("Resultados", f"Puntaje del sistema: {suma_cartas_sistema}\nPuntaje del jugador: {suma_cartas_jugador}")
            messagebox.showinfo("¡Empate!", f"¡Empate! Ambos tienen El mismo puntaje. \nTu puntaje es de: {puntajeRegalo}")
        else:
            puntajeRegalo -= puntajePerdida
            messagebox.showinfo("Resultados", f"Puntaje del sistema: {suma_cartas_sistema} \nPuntaje del jugador: {suma_cartas_jugador}")
            messagebox.showinfo("¡Perdiste!", f"¡Perdiste! El sistema ganó por: {suma_cartas_sistema - suma_cartas_jugador} de diferencia. \nTu puntaje es de: {puntajeRegalo}")

        ventana_juego_5.destroy()

    btn_pedir_carta = tk.Button(ventana_juego_5, text="Pedir carta", command=pedir_carta)
    btn_pedir_carta.pack()

    btn_detenerse = tk.Button(ventana_juego_5, text="Detenerse", command=detenerse)
    btn_detenerse.pack()

# Función para verificar el número ingresado en el juego 1
def verificar_numero(numero_ingresado, numero_aleatorio, ventana):
    global puntajeRegalo
    try:
        numero = int(numero_ingresado)
        if numero == numero_aleatorio:
            puntajeRegalo += puntajeGanancia
            messagebox.showinfo("¡Bien hecho!", f'¡Bien hecho! \nEl numero era: {numero_aleatorio} \nTu puntaje es de: {puntajeRegalo}')
        else:
            puntajeRegalo -= puntajePerdida
            messagebox.showinfo("¡Fallaste!", f'¡Fallaste! \nEl numero era: {numero_aleatorio} \nTu puntaje es de: {puntajeRegalo}')
    except ValueError:
        messagebox.showerror("Error", "Por favor, ingresa un número entero.")

# Función para verificar la elección ingresada en el juego 2 
def verificar_eleccion(eleccion, opciones, ventana):
    global puntajeRegalo
    if eleccion not in opciones:
        messagebox.showerror("Error", "Opción no válida.")
        return
    eleccion_aleatoria = random.choice(opciones)
    messagebox.showinfo("Elección", f"Tu elección: {eleccion}\nElección aleatoria: {eleccion_aleatoria}")
    if eleccion == eleccion_aleatoria:
        messagebox.showinfo("¡Bien hecho!", f'¡Bien hecho! \nTu puntaje es de: {puntajeRegalo}')
        puntajeRegalo += puntajeGanancia
    else:
        messagebox.showinfo("¡Fallaste!", f'¡Fallaste! \nTu puntaje es de: {puntajeRegalo}')
        puntajeRegalo -= puntajePerdida

# Función para verificar el número ingresado en el juego 4
def verificar_numero_4(numero_ingresado, ventana):
    global puntajeRegalo
    try:
        numero_usuario = int(numero_ingresado)
        numero_sistema = random.randint(1, 10)
        eleccion_sistema = random.choice(["mayor", "menor"])
        if eleccion_sistema == "mayor":
            if numero_usuario > numero_sistema:
                puntajeRegalo += puntajeGanancia
                messagebox.showinfo("¡Ganaste!", f"¡Ganaste! Tu número es mayor que el del sistema. \nTu puntaje es de: {puntajeRegalo}")
            else:
                messagebox.showinfo("¡Perdiste!", f"¡Perdiste! Tu número es menor que el del sistema. \nTu puntaje es de: {puntajeRegalo}")
                puntajeRegalo -= puntajePerdida
        else:
            if numero_usuario < numero_sistema:
                messagebox.showinfo("¡Ganaste!", f"¡Ganaste! Tu número es menor que el del sistema. \nTu puntaje es de: {puntajeRegalo}")
                puntajeRegalo += puntajeGanancia
            else:
                messagebox.showinfo("¡Perdiste!", f"¡Perdiste! Tu número es mayor que el del sistema. \nTu puntaje es de: {puntajeRegalo}")
                puntajeRegalo -= puntajePerdida
    except ValueError:
        messagebox.showerror("Error", "Por favor, ingresa un número entero.")

# Función para iniciar el juego
def iniciar_juego():
    root.withdraw()
    # Crear una nueva ventana para elegir el juego
    ventana_juego = tk.Toplevel()
    ventana_juego.title("Elegir juego")

    # Botones para elegir el juego
    btn_juego1 = tk.Button(ventana_juego, text="Escoger el número", command=juego_1)
    ventana_juego.withdraw
    btn_juego1.pack()

    btn_juego2 = tk.Button(ventana_juego, text="Cara o Cruz", command=juego_2)
    ventana_juego.withdraw
    btn_juego2.pack()

    btn_juego3 = tk.Button(ventana_juego, text="Piedra, Papel o Tijera", command=juego_3)
    ventana_juego.withdraw
    btn_juego3.pack()

    btn_juego4 = tk.Button(ventana_juego, text="Mayor o Menor", command=juego_4)
    ventana_juego.withdraw
    btn_juego4.pack()

    btn_juego5 = tk.Button(ventana_juego, text="Blackjack", command=juego_5)
    ventana_juego.withdraw
    btn_juego5.pack()

# Crear la ventana principal
root = tk.Tk()
root.title("Casino de Python")

# Botón para iniciar el juego
btn_iniciar = tk.Button(root, text="Iniciar juego", command=iniciar_juego)
btn_iniciar.pack()

# Ejecutar la ventana
root.mainloop()
