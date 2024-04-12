import time
import random

health = 100
hunger = 0

Winning_easteregg = input("Dexter destroys!")
medkit = ["water", "bandaids", "meds", "radio", "flare"]


def start_game():
    global health, hunger
    print("You wake up on a deserted island after a plane crash. You are the only survivor.")
    time.sleep(2)
    print("Your goal is to find supplies and seek help to escape the island.")
    time.sleep(2)
    print("You see three paths ahead. Which way do you choose?")
    time.sleep(2)
    print("1. Follow the coastline")
    print("2. Venture into the dense forest")
    print("3. Climb up the nearest hill")

    choice = input("Enter your choice (1, 2, or 3): ")
    if choice == '1':
        follow_coastline()
    elif choice == '2':
        venture_forest()
    elif choice == '3':
        climb_hill()
    elif choice == 'Dexter destroys!':
        print()
    else:
        print("Invalid choice. Please try again.")
        start_game()

def follow_coastline():
    global health, hunger
    print("As you follow the coastline, you find a broken radio and some scattered food supplies.")
    time.sleep(2)
    print("You also spot a boat in the distance. What do you do?")
    time.sleep(2)
    print("1. Try to fix the radio and call for help.")
    print("2. Gather the food supplies and head back to the crash site.")

    choice = input("Enter your choice (1 or 2): ")
    if choice == '1':
        fix_radio()
    elif choice == '2':
        hunger += 10
        if hunger >= 100:
            print("Your hunger has reached a critical level. You must find food soon.")
            health -= 10
            time.sleep(2)
        return_to_crash_site()
    else:
        print("Invalid choice. Please try again.")
        follow_coastline()

def fix_radio():
    print("You manage to fix the radio and call for help. A rescue team is on their way.")
    time.sleep(2)
    print("Congratulations! You have been rescued from the deserted island.")

def return_to_crash_site():
    global health, hunger
    print("You return to the crash site and find a first aid kit and some useful tools.")
    time.sleep(2)
    print("You can either build a shelter or explore further. What do you choose?")
    time.sleep(2)
    print("1. Build a shelter and stay put.")
    print("2. Explore the inner part of the island.")

    choice = input("Enter your choice (1 or 2): ")
    if choice == '1':
        build_shelter()
    elif choice == '2':
        explore_inner_island()
    else:
        print("Invalid choice. Please try again.")
        return_to_crash_site()

def build_shelter():
    print("You build a shelter and wait for rescue. After a few days, a passing ship spots your signal and saves you.")

def explore_inner_island():
    global health, hunger
    print("You discover a tribe living on the inner part of the island. They provide you with supplies and help you get off the island.")

def venture_forest():
    global health, hunger
    print("You enter the dense forest and find some wild fruits and fresh water.")
    time.sleep(2)
    print("You also notice some strange animal sounds in the distance. What do you do?")
    time.sleep(2)
    print("1. Collect fruits and water and return to the crash site.")
    print("2. Investigate the source of the animal sounds.")

    choice = input("Enter your choice (1 or 2): ")
    if choice == '1':
        hunger += 5
        if hunger >= 100:
            print("Your hunger has reached a critical level. You must find food soon.")
            health -= 10
            time.sleep(2)
        return_to_crash_site()
    elif choice == '2':
        investigate_animal_sounds()
    else:
        print("Invalid choice. Please try again.")
        venture_forest()

def investigate_animal_sounds():
    global health, hunger
    print("You cautiously approach the source of the sounds and find a group of wild boars.")
    time.sleep(2)
    print("They seem aggressive. What do you do?")
    time.sleep(2)
    print("1. Retreat and head back to the crash site.")
    print("2. Try to scare the boars away with a makeshift weapon.")

    choice = input("Enter your choice (1 or 2): ")
    if choice == '1':
        return_to_crash_site()
    elif choice == '2':
        scare_boars_away()
    else:
        print("Invalid choice. Please try again.")
        investigate_animal_sounds()

def scare_boars_away():
    global health, hunger
    print("You manage to scare the boars away and find a hidden cave behind them.")
    time.sleep(2)
    print("Inside the cave, you discover a stash of tools and supplies that will be useful for your survival.")
    time.sleep(2)
    print("You can now use these supplies to create a signal or shelter. What do you choose?")
    time.sleep(2)
    print("1. Build a signal for help.")
    print("2. Use the supplies to create a sturdy shelter.")

    choice = input("Enter your choice (1 or 2): ")
    if choice == '1':
        build_signal()
    elif choice == '2':
        create_shelter()
    else:
        print("Invalid choice. Please try again.")
        scare_boars_away()

def build_signal():
    print("You build a signal using the supplies and get rescued by a passing aircraft.")

def create_shelter():
    print("You build a sturdy shelter to protect yourself. Eventually, a rescue team finds you and helps you escape the island.")

def climb_hill():
    global health, hunger
    print("You climb up the hill and find a clear view of the island.")
    time.sleep(2)
    print("You also spot a river and some smoke in the distance. What do you do?")
    time.sleep(2)
    print("1. Follow the river to explore further.")
    print("2. Head towards the source of the smoke.")

    choice = input("Enter your choice (1 or 2): ")
    if choice == '1':
        follow_river()
    elif choice == '2':
        head_to_smoke()
    else:
        print("Invalid choice. Please try again.")
        climb_hill()

def follow_river():
    global health, hunger
    print("You follow the river and find a small fishing village on the other side of the island.")
    time.sleep(2)
    print("The villagers provide you with a boat and help you navigate to a nearby inhabited area.")

def head_to_smoke():
    global health, hunger
    print("You head towards the source of the smoke and discover a group of survivors from another crash.")
    time.sleep(2)
    print("They have established a small camp and are trying to signal for help. You join forces with them and manage to get rescued.")
    time.sleep(2)
    print("Congratulations! You have been successfully rescued from the deserted island.")

start_game()
