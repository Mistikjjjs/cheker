import os
import random
import time
import names

# Limpia la pantalla (compatible con Linux)
os.system('clear')

# Encabezado visual
time.sleep(0.1)
print("""
\33[96m
  ꧁🅲🅾🅼🅱🅾 🅼🅰🅺🅴🆁 & 🅼3🆄 🆂🅲🅰🅽🅽🅴🆁꧂                
           ꧁️☠️PERCIA☠️꧂       
\33[31m
""")
time.sleep(0.1)
print("""
\33[0m\33[32m
COMBO OPTIONS:                      

1) NOMBRE:NOMBRE (Mix)
2) Nombres (Mayúsculas, Minúsculas)
Ejemplo:
Juan
juan
0) PARA SALIR A SCANEAR
\33[33m
""")

# Menú principal
menu = input("Enter Option: ")

# Directorio donde se guardarán los combos
combo_dir = "/home/combo/"  # Cambia esto si prefieres otro directorio

# Crear el directorio si no existe
if not os.path.exists(combo_dir):
    os.makedirs(combo_dir)

if menu == "1":
    # Opción 1: Generar combos mixtos
    filename = input("\nNombre de tu Combo (.txt): ")
    num_lines = int(input("¿Cuántas líneas deseas generar?: "))
    
    # Ruta completa del archivo
    file_path = os.path.join(combo_dir, f"{filename}.txt")
    
    # Abrir archivo una sola vez para escritura
    with open(file_path, "w", encoding="utf-8") as f:
        for _ in range(num_lines):
            # Generar nombres y números aleatorios
            first_name = names.get_first_name()
            last_name = names.get_last_name()
            random_num = random.randint(1, 100000)
            
            # Crear combinaciones
            combinations = [
                f"{first_name}{random_num}:{first_name}{random_num}",
                f"{last_name}{random_num}:{last_name}{random_num}",
                f"{first_name}2022:{first_name}2022",
                f"{last_name}2022:{last_name}2022",
                f"{first_name}2023:{first_name}2023",
                f"{last_name}2023:{last_name}2023",
                f"{first_name}:{first_name}",
                f"{last_name}:{last_name}",
                f"{first_name}123:{first_name}123",
                f"{last_name}123:{last_name}123",
                f"{random_num}:{random_num}"
            ]
            
            # Escribir combinaciones en el archivo
            for combo in combinations:
                f.write(combo + "\n")
                print(combo)

    print(f"\33[1;37;33m\n¡Combo generado exitosamente! Archivo guardado en: {file_path}\n")

elif menu == "2":
    # Opción 2: Generar nombres en diferentes formatos
    filename = input("\nNombre de tu Combo (.txt): ")
    num_lines = int(input("Número de líneas (x2): "))
    
    # Ruta completa del archivo
    file_path = os.path.join(combo_dir, f"{filename}.txt")
    
    # Abrir archivo una sola vez para escritura
    with open(file_path, "w", encoding="utf-8") as f:
        for _ in range(num_lines):
            # Generar nombres aleatorios
            first_name = names.get_first_name()
            last_name = names.get_last_name()
            
            # Crear combinaciones
            combinations = [
                f"{first_name} {last_name}",
                f"{first_name.lower()} {last_name.lower()}",
                f"{first_name.upper()} {last_name.upper()}"
            ]
            
            # Escribir combinaciones en el archivo
            for combo in combinations:
                f.write(combo + "\n")
                print(combo)

    print(f"\33[1;37;33m\n¡Combo generado exitosamente! Archivo guardado en: {file_path}\n")

elif menu == "0":
    # Salir
    print("\33[1;37;33m\nSaliendo...\n")
    sys.exit()

else:
    # Opción inválida
    print("\33[1;31m\nOpción no válida. Inténtalo de nuevo.\n")
