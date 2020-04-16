
# Instructions

First of all I'd like to welcome you to this workshop. 

Everything in the world is animated and animating our apps is a key to make them look compelling, "telling a story" of your app as well as reducing cognitive load for your users. Animations can be as simple as bouncing buttons or complex like full screen transitions, gesture based animations and multi layered animations. Not only animations sometimes are not that straightforward to implement, they have to look "realistic" as well as to be performant.

In this workshop we will get from the very basics of creating compelling animations in React Native to complex gesture animations, custom transitions, purely native animations and so on. We will discuss performance bottlenecks and work around them to get 60FPS animations. This workshop is targeted towards developers already familiar with the basics of React Native and want to level up their knowledge understanding all the intricacies of animating in React Native.


## Remote workshop guidelines

Workshop will be taught using [Zoom](zoom.us) software. It's crucial that you download Zoom from official website.
https://zoom.us/download

We will use Zoom breakout rooms feature, which means that you will be splitted into groups during hands on part of the excercise and assigned into so-called "Breakout rooms".
In breakout room you are assigned to its crucial that you collaborate and share screen to ask guidelines. That's the best part of the remote workshop and it makes it even more interactive and engaging than in-person one.
I will go through every room to participate in discussions, help answering questions and so on.

I encourage you to keep video on at all times, so experience will be more human and social. I also encoruage you to use Mute feature if you are not talking to disable background noise. 
<details>
<summary>
Prerequisites
</summary>
## Having your Machine Ready - 3 Easy Steps

You'll be able to write React Native code for either iOS, Android, or both.  Let's make sure your machine is ready to get rolling.

It's important that you are able to run a "Hello World" app **BEFORE** this workshop. And that you are using **React Native CLI** quickstart


### 1. Git/GitHub source control
This part isn't critical, but we'll be occasionally pushing our code to a repo in the demo.  If you would like to follow along
with those steps, be sure to have a [GitHub](https://github.com/) account and install Git for your OS.

Installing Git:  https://www.atlassian.com/git/tutorials/install-git

### 2. React Native - using Native

There is a quick-start and there is a native code start.  We'll be using the native-cli option. 

The directions can be found here:  https://reactnative.dev/docs/environment-setup

Please click the native tab and follow the steps provided. 

> **React Native CLI Quickstart**


### 3. Hello World
Each of the directions above, ask you to generate "AwesomeProject" and run it.  If you've done that you're ready for our workshop!

</details>


Getting into the basics of `Animated`

<details>
    <summary>
        Exercise 1
    </summary>

    - Start a new project, 
    - Create a new screen with a green box and position it at the top of the view.
    - Move box to the middle of the screen using `Animated.Value` and timing function
    - Create a sequence of several animations. Move the box to the right and then down.
</details>

In this exercise we will experiment with `react-native-animatable` and see what we can use for micro interactions.

<details>
<summary>
Exercise 2
</summary>

- install `react-native-animatable` 
- Create a screen with list of items
- animate this items using `react-native-animatable` primitives
</details>


In this exercise we will experiment with interpolation and various Animated functions

<details>


<summary>
Exercise 3 -
</summary>

- Create a new screen.
- Create three items on the screen
- Create a sequence animation to change items properties
- Change 3 different types of properties

</details>


In next exercise we will use onLayout and native event to get screen measurements and change things according to them

<details>
<summary>
Exercise 4
</summary>

- Move the green box from the first example to the bottom of the screen using screen measurements

Hint:
- Use `onLayout` function to measure screen size.
- use `useWindowDimensions` to get window dimensions

</details>

In this exercise we will recreate Twitter like header

<details>
<summary>
Exercise 5 - Interpolation with scroll
</summary>

- In a previous project create a new screen
- Recreate Twitter like header example on profile by implementing what was learnt in the class

</details>

In next exercise we will put all together and create Gestures animations by creating Tinder like experience with swipeable cards.

<details>
<summary>
Exercise 6 - Gestures
</summary>

- Listen to touch events and based on events move the card on the screen
- Rotate the card together with the movement
- When getting towards the corner of the screen also decrease opacity of the card

</details>


