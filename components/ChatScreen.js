import * as React from 'react';
import { Platform , KeyboardAvoidingView,SafeAreaView } from 'react-native';
// @flow
import { GiftedChat } from 'react-native-gifted-chat'; // 0.3.0

import Fire from '../fire';

type Props = {
  name?: string,
};

class ChatScreen extends React.Component<Props> {

  static navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params || {}).name || 'Chat!',
  });

  state = {
    messages: [],
  };

  get user() {
    return {
      name: this.props.navigation.state.params.name,
      _id: Fire.shared.uid,
    };
  }

  render() {
       const chat=<GiftedChat messages={this.state.messages} onSend={Fire.shared.send} user={this.user}/>;

        if(Platform.OS=='android'){
            return(
                <KeyboardAvoidingView style={{flex:1}}behavior="padding" keyboardVerticalOffset={0} enabled>
                    {chat}
                </KeyboardAvoidingView>
            );
        }
    return<SafeAreaView style={{flex:1}}>{chat}</SafeAreaView>; 
  }

  componentDidMount() {
    Fire.shared.on(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );
  }
  componentWillUnmount() {
    Fire.shared.off();
  }
}

export default ChatScreen;
